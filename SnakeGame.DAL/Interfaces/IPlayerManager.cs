using SnakeGame.DAL.Entities;
using System;
using System.Threading.Tasks;

namespace SnakeGame.DAL.Interfaces
{
    public interface IPlayerManager : IDisposable
    {
        void Create(PlayerProfile player);
        Task<PlayerProfile> FindAsync(string id);
        PlayerProfile Find(string id);
        void Modify(PlayerProfile player);
    }
}
