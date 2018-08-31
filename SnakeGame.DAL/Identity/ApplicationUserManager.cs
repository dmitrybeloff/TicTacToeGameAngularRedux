using Microsoft.AspNet.Identity;
using SnakeGame.DAL.Entities;

namespace SnakeGame.DAL.Identity
{
    public class ApplicationUserManager : UserManager<ApplicationUser>
    {
        public ApplicationUserManager(IUserStore<ApplicationUser> store)
                : base(store)
        { }
    }
}
