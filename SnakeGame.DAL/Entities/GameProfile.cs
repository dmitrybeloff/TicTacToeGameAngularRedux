using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SnakeGame.DAL.Entities
{
    public class GameProfile
    {
        [Key]
        public int GameId { get; set; }

        public string Name { get; set; }

        public virtual ICollection<PlayerProfile> PlayerProfiles { get; set; }

        public GameProfile()
        {
            PlayerProfiles = new List<PlayerProfile>();
        }
    }
}
