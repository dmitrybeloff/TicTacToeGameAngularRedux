using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SnakeGame.DAL.Entities
{
    public class PlayerProfile
    {
        [Key]
        [ForeignKey("ApplicationUser")]
        public string PlayerId { get; set; }

        public int Age { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }

        public virtual ApplicationUser ApplicationUser { get; set; }

        public virtual ICollection<GameProfile> GameProfiles { get; set; }

        public PlayerProfile()
        {
            GameProfiles = new List<GameProfile>();
        }
    }
}
