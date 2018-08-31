using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SnakeGame.WEB.Models
{
    public class TicaTacToeUserModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string CurrentRoom { get; set; }
    }
}