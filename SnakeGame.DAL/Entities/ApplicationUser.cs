using Microsoft.AspNet.Identity.EntityFramework;

namespace SnakeGame.DAL.Entities
{
    public class ApplicationUser : IdentityUser
    {
        public virtual PlayerProfile PlayerProfile { get; set; }
    }
}
