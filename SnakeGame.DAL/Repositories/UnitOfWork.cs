using Microsoft.AspNet.Identity.EntityFramework;
using SnakeGame.DAL.EF;
using SnakeGame.DAL.Entities;
using SnakeGame.DAL.Identity;
using SnakeGame.DAL.Interfaces;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace SnakeGame.DAL.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private bool disposed = false;

        private ApplicationDbContext db;
        private ApplicationUserManager userManager;
        private IPlayerManager playerManager;

        public UnitOfWork(string connectionString)
        {
            db = new ApplicationDbContext(connectionString);
            userManager = new ApplicationUserManager(new UserStore<ApplicationUser>(db));
            playerManager = new PlayerManager(db);
        }

        public IPlayerManager PlayerManager
        {
            get { return playerManager; }
        }

        public ApplicationUserManager UserManager
        {
            get { return userManager; }
        }

        public void Save()
        {
            db.SaveChanges();
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }       

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    userManager.Dispose();
                    playerManager.Dispose();
                    db.Dispose();
                }
                this.disposed = true;
            }
        }
    }
}
