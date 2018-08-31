using Microsoft.AspNet.Identity.EntityFramework;
using SnakeGame.DAL.Entities;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.Linq;

namespace SnakeGame.DAL.EF
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(string connection):
            base(connection)
        {
            Initialize(this);
        }

        public ApplicationDbContext() :
            base(ApplicationDbContext.ConnectionStringForMigration())
        { }

        private static string ConnectionStringForMigration()
        {
            return ConfigurationManager.ConnectionStrings["SnakeGameDb"].ConnectionString;
        }

        public DbSet<PlayerProfile> PlayerProfiles { get; set; }
        public DbSet<GameProfile> GameProfiles { get; set; } 

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Эта часть создает связь многие со многими, осталась от игры в змейку и предназначалась для того,
            // чтобы хранить в базе игры, в которые играет игрок.
            modelBuilder.Entity<GameProfile>().HasMany(c => c.PlayerProfiles)
                .WithMany(s => s.GameProfiles)
                .Map(t => t.MapLeftKey("GameId")
                .MapRightKey("PlayerId")
                .ToTable("PlayerGame"));
        }

        private void Initialize(ApplicationDbContext context)
        {
            //var player = context.PlayerProfiles.FirstOrDefault();
            //if (player != null)
            //{
            //    var game = context.GameProfiles.FirstOrDefault();
            //    if (game == null)
            //    {
            //        context.GameProfiles.Add(new GameProfile() { Name = "SnakeGame", GameId = 1, PlayerProfiles = new List<PlayerProfile>() { player } });
            //        context.SaveChanges();
            //    }                
            //} 
        }
    }
}
