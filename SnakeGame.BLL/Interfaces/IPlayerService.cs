using SnakeGame.BLL.DTO;
using SnakeGame.BLL.Infrastructure;
using System;
using System.Security.Claims;
using System.Threading.Tasks;

namespace SnakeGame.BLL.Interfaces
{
    public interface IPlayerService : IDisposable
    {
        Task<OperationDetails> Create(PlayerDTO playerDto);
        Task<ClaimsIdentity> Authenticate(PlayerDTO playerDto);
        PlayerDTO Find(string playerId);
        void ModifyPlayer(PlayerDTO playerDTO);
    }
}
