using SnakeGame.BLL.Enum;
using SnakeGame.BLL.Models;

namespace SnakeGame.BLL.Interfaces
{
    public interface IGameService
    {
        GameMoveResults MakeMove(ref GameModel game, string playerId, int cellIndex, out string gameMessage);
    }
}
