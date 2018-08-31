using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SnakeGame.BLL.Models
{
    public class GameModel
    {
        private Random r;
        public int GameId { get; set; }
        public string CurrentId { get; set; }
        public string CurrentUsername { get; set; }
        public string[] Deck { get; set; } = new string[9];
        public List<TicaTacToeUserModel> PlayerList { get; set; }

        public GameModel(TicaTacToeUserModel player1, TicaTacToeUserModel player2)
        {
            r = new Random();

            var pTypeInt = r.Next(2);
            var pType = pTypeInt != 0;

            player1.PlayerType = pType ? "X" : "O";
            player2.PlayerType = pType ? "O" : "X";

            PlayerList = new List<TicaTacToeUserModel>();
            PlayerList.Add(player1);
            PlayerList.Add(player2);

            var currentPlayer = PlayerList.Where(p => p.PlayerType == "X").First();

            CurrentId = currentPlayer.Id;
            CurrentUsername = currentPlayer.Username;
        }
    }
}
