using SnakeGame.DAL.EF;
using SnakeGame.DAL.Entities;
using SnakeGame.DAL.Interfaces;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace SnakeGame.DAL.Repositories
{
    public class PlayerManager : IPlayerManager
    {
        public ApplicationDbContext Database { get; set; }
        public PlayerManager(ApplicationDbContext db)
        {
            Database = db;
        }

        public void Create(PlayerProfile player)
        {
            Database.PlayerProfiles.Add(player);
        }

        public async Task<PlayerProfile> FindAsync(string id)
        {
            //return Database.PlayerProfiles.AsNoTracking().Where(p => p.PlayerId == id).FirstOrDefault();
            return await Database.PlayerProfiles.FindAsync(id);
        }

        public PlayerProfile Find(string id)
        {
            return Database.PlayerProfiles.Find(id);
        }

        public void Modify(PlayerProfile player)
        {
            Database.Entry(player).State = EntityState.Modified;
        }

        public void Dispose()
        {
            Database.Dispose();
        }
    }
}
