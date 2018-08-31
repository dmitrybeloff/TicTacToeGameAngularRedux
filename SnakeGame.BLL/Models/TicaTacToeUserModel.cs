using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SnakeGame.BLL.Models
{
    public class TicaTacToeUserModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string PlayerType { get; set; }
        public string Group { get; set; }
    }
}