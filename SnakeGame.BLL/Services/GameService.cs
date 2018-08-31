using SnakeGame.BLL.Interfaces;
using SnakeGame.BLL.Models;
using System.Linq;

namespace SnakeGame.BLL.Services
{
    public class GameService : IGameService
    {
        public string MakeMove(ref GameModel game, string playerId, int cellIndex)
        {
            if (game.CurrentId == playerId)
            {
                if (game.Deck[cellIndex] != null && game.Deck[cellIndex] != string.Empty)
                    return "Ошибка: Клетка занята!";               

                var player = game.PlayerList.Where(p => p.Id == playerId).FirstOrDefault();

                var type = player.PlayerType;

                game.Deck[cellIndex] = type;

                bool winner = true;
                for (var i = 0; i < 9; i+=3)
                {
                    winner = true;
                    for (var j = i; j < i + 3; j++)
                    {
                        if (game.Deck[j] != type)
                        {
                            winner = false;
                            break;
                        }
                    }

                    if (winner)
                    {
                        return player.Username + " победил!";
                    }
                }                

                for (var i = 0; i < 3; i ++)
                {
                    winner = true;
                    for (var j = i; j < 9; j+=3)
                    {
                        if (game.Deck[j] != type)
                        {
                            winner = false;
                            break;
                        }
                    }
                    if (winner)
                    {
                        return player.Username + " победил!";
                    }
                }                

                winner = true;
                for (var i = 0; i < 9; i+= 4)
                {                    
                    if (game.Deck[i] != type)
                    {
                        winner = false;
                        break;
                    }
                }

                if (winner)
                {
                    return player.Username + " победил!";
                }

                winner = true;
                for (var i = 2; i < 7; i+=2)
                {
                    winner = true;
                    if (game.Deck[i] != type)
                    {
                        winner = false;
                        break;
                    }
                }

                if (winner)
                {
                    return player.Username + " победил!";
                }

                var hasMoves = game.Deck.Any(cell => string.IsNullOrEmpty(cell));
                if (!hasMoves)
                {
                    return "Ничья!";
                }

                var newPlayer = game.PlayerList.Where(p => p.Id != playerId).First();
                game.CurrentUsername = newPlayer.Username;
                game.CurrentId = newPlayer.Id;
            }
            return string.Empty;
        }
    }
}
