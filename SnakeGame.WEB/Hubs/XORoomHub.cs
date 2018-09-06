using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;
using SnakeGame.BLL.Enum;
using SnakeGame.BLL.Interfaces;
using SnakeGame.BLL.Models;
using SnakeGame.BLL.Services;

namespace SnakeGame.WEB.Hubs
{
    public class XORoomHub : Hub
    {
        IGameService gameService;

        static List<TicaTacToeUserModel> Users = new List<TicaTacToeUserModel>(); // список пользователей
        static List<GameModel> Games = new List<GameModel>(); // список игр
        static int GameId = 0;

        public XORoomHub(IGameService service)
        {
            gameService = service;
        }

        // Передача сообщение в чат
        public void SendChatMessage(string name, string username, string message)
        {
            Clients.All.RecieveChatMessage(name, username, message);
        }

        // Приглашение на игру
        public void InviteUser(string callerId, string targetId)
        {
            // Находим пользователей
            var callerUser = Users.Where(user => user.Id == callerId).FirstOrDefault();
            var targetUser = Users.Where(user => user.Id == targetId).FirstOrDefault();

            if (callerUser != null && targetUser != null)
            {
                if (callerId == targetId)
                    Clients.Caller.OnAlert("Нельзя вызывать самого себя на игру!!!");
                else if (string.IsNullOrEmpty(targetUser.Group)) // если пользователь не состоит в группе
                    Clients.Client(targetId).OnInvite(callerId, callerUser.Username);
                else Clients.Caller.OnAlert("Пользователь " + targetUser.Username + " недоступен или уже играет!"); // если пользователь состоит в группе
            }
            else Clients.Caller.OnAlert("Что-то пошло не так!!!");
        }

        // Отказ от игры
        public void DeclineInvite(string targetId)
        {
            // Находим caller'а, чтобы взять username 
            var id = Context.ConnectionId;
            var caller = Users.Where(user => user.Id == id).FirstOrDefault();

            if (caller != null)
            {
                // Отказываем
                var callerUsername = caller.Username;
                Clients.Client(targetId).OnAlert("Пользователь " + callerUsername + " отказался с вами играть!");
            }
            else Clients.Caller.OnAlert("Что-то пошло не так!!!");
        }

        // Принять приглашение
        public void AcceptInvite(string targetId)
        {
            var callerId = Context.ConnectionId;

            // Находим пользователей
            var caller = Users.Where(user => user.Id == callerId).FirstOrDefault();
            var target = Users.Where(user => user.Id == targetId).FirstOrDefault();

            if (caller != null && target != null)
            {
                var callerUsername = caller.Username;
                var targetUsername = target.Username;

                // Называем группу
                var groupName = callerId + targetId;

                // Записываем группу в свойства клиентов
                caller.Group = groupName;
                target.Group = groupName;

                // Добавляем клиентов в группу
                Groups.Add(callerId, groupName);
                Groups.Add(targetId, groupName);

                // Создаем экземпляр игры
                var game = new GameModel(caller, target);

                // Добавляем игру в список игр
                Games.Add(game);
                game.GameId = GameId++;

                // Передаем клиентам информацию о типе игрока(крестики или нолики)
                Clients.Client(targetId).ConnectToGame(targetId, target.Username, target.PlayerType);
                Clients.Client(callerId).ConnectToGame(callerId, caller.Username, caller.PlayerType);
                // Передаем начальное состояние игры
                Clients.Group(groupName).OnSetGameState(game.GameId, game.CurrentId, game.CurrentUsername, game.Deck);
            }
            else Clients.Caller.OnAlert("Что-то пошло не так!!!");
        }

        public void RecieveGameState(int gameId, string playerId, int cellIndex)
        {
            // Находим игру
            var game = Games.Where(g => g.GameId == gameId).FirstOrDefault();
            if (game != null)
            {
                string gameMessage;
                // Рассчитываем состояние игры
                // Здесь не обязательно передавать game по ссылке, 
                // потому что он и так передается по ссылке(новых экземпляров game я не буду создавать), 
                // но добавил ref для понимания, что game изменится в методе
                var gameCallback = gameService.MakeMove(ref game, playerId, cellIndex, out gameMessage); 

                // Обработка результатов хода
                
                switch(gameCallback)
                {
                    // Обработка неправильного хода
                    case (GameMoveResults.Error):
                        Clients.Caller.OnAlert(gameMessage);
                        break;
                    // Завершение игры
                    case (GameMoveResults.EndGame):
                        // Передача последнего хода, это необязательное действие, но если будут сетевые задержки, то желательное
                        Clients.Group(game.PlayerList[0].Group).OnSetGameState(game.GameId, game.CurrentId, game.CurrentUsername, game.Deck);
                        // Передачи команды на завершение игры 
                        Clients.Group(game.PlayerList[0].Group).OnGameEnded();
                        // Передача сообщения о результатах игры
                        Clients.Group(game.PlayerList[0].Group).OnAlert(gameMessage);

                        // Удаление пользователей из группы
                        foreach (var player in game.PlayerList)
                        {
                            var user = Users.Where(x => x.Id == player.Id).FirstOrDefault();
                            if (user != null)
                            {
                                Groups.Remove(user.Id, user.Group);
                                user.Group = null;
                            }
                        }

                        // Удаление игры из списка
                        Games.Remove(game);
                        break;
                    case (GameMoveResults.Continue):
                        // Передача состояния игры всем клиентам в группе
                        Clients.Group(game.PlayerList[0].Group).OnSetGameState(game.GameId, game.CurrentId, game.CurrentUsername, game.Deck);
                        break;
                    default:
                        Clients.Group(game.PlayerList[0].Group).OnAlert("Что-то пошло не так");
                        break;
                }                
            }
        }

        // Подключение пользователя, технически он уже подключен, здесь добавляю его в список пользователей
        public void Connect(string name, string username)
        {
            var id = Context.ConnectionId;

            if (!Users.Any(x => x.Id == id))
            {
                Users.Add(new TicaTacToeUserModel { Id = id, Name = name, Username = username });

                // Передача списка пользователей чата клиенту
                Clients.Caller.OnConnected(id, name, username, Users);

                // Передача сообщения всем клиентам о том, что текущий подключился 
                Clients.AllExcept(id).OnNewUserConnected(id, name, username);
            }
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            // Находим пользователя в списке
            var item = Users.Where(x => x.Id == Context.ConnectionId).FirstOrDefault();

            if (item != null)
            {
                // Удаляем пользователя из списка
                Users.Remove(item);
                // Сообщаем всем что пользователь отключился
                Clients.All.OnUserDisconnected(item.Id, item.Name, item.Username);

                // Проверяем состоит ли пользователь в группе
                if (!string.IsNullOrEmpty(item.Group))
                {
                    // Удаляем пользователя из группы
                    Groups.Remove(item.Id, item.Group);
                    // Сообщаем группе, что игра закончилась
                    Clients.Group(item.Group).OnGameEnded();
                    Clients.Group(item.Group).onAlert("Противник отключился от игры!");

                    // Находим игру, в которую играл отключившийся пользователь
                    var game = (from g in Games
                                from p in g.PlayerList
                                where p.Id == item.Id
                                select g).FirstOrDefault();

                    if (game != null)
                    {
                        // Находим всех пользователей, состоящих в группе игры, удаляем их из группы. Пользователю, 
                        // который остался в чате, устанавлием группу в null.
                        // Я понимаю, что так, как я сделал тут, делать не надо, но я вообще старался почаще использовать 
                        // linq, это в учебных целях
                        var res = from p in game.PlayerList
                                   from u in Users
                                   where p.Id == u.Id
                                   select new Action(() => { Groups.Remove(u.Id, u.Group); u.Group = null; } );

                        foreach (var act in res)
                            act.Invoke();

                        Games.Remove(game);
                    }                                   
                }
            }

            return base.OnDisconnected(stopCalled);
        }
    }
}