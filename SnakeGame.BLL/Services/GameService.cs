using SnakeGame.BLL.Enum;
using SnakeGame.BLL.Interfaces;
using SnakeGame.BLL.Models;
using System.Linq;

namespace SnakeGame.BLL.Services
{
    public class GameService : IGameService
    {
        public GameMoveResults MakeMove(ref GameModel game, string playerId, int cellIndex, out string gameMessage)
        {
            gameMessage = string.Empty;
            if (game.CurrentId == playerId)
            {
                if (game.Deck[cellIndex] != null && game.Deck[cellIndex] != string.Empty)
                {
                    gameMessage = "Ошибка: Клетка занята!";
                    return GameMoveResults.Error;
                }

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
                        gameMessage =  player.Username + " победил!";
                        return GameMoveResults.EndGame;
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
                        gameMessage = player.Username + " победил!";
                        return GameMoveResults.EndGame;
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
                    gameMessage = player.Username + " победил!";
                    return GameMoveResults.EndGame;
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
                    gameMessage = player.Username + " победил!";
                    return GameMoveResults.EndGame;
                }

                var hasMoves = game.Deck.Any(cell => string.IsNullOrEmpty(cell));
                if (!hasMoves)
                {
                    gameMessage = "Ничья!";
                    return GameMoveResults.Draw;
                }

                var newPlayer = game.PlayerList.Where(p => p.Id != playerId).First();
                game.CurrentUsername = newPlayer.Username;
                game.CurrentId = newPlayer.Id;
            }
            return GameMoveResults.Continue;
        }
    }
}
