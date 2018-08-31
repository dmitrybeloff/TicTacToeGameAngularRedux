using SnakeGame.BLL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SnakeGame.BLL.Interfaces
{
    public interface IGameService
    {
        string MakeMove(ref GameModel game, string playerId, int cellIndex);
    }
}
