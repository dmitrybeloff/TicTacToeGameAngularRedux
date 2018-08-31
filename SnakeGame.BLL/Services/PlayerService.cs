using Microsoft.AspNet.Identity;
using SnakeGame.BLL.DTO;
using SnakeGame.BLL.Infrastructure;
using SnakeGame.BLL.Interfaces;
using SnakeGame.DAL.Entities;
using SnakeGame.DAL.Interfaces;
using System;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;

namespace SnakeGame.BLL.Services
{
    public class PlayerService : IPlayerService
    {
        IUnitOfWork UnitOfWork { get; set; }

        public PlayerService(IUnitOfWork uow)
        {
            UnitOfWork = uow;
        }

        public async Task<ClaimsIdentity> Authenticate(PlayerDTO playerDto)
        {
            ClaimsIdentity claim = null;
            ApplicationUser user = await UnitOfWork.UserManager.FindAsync(playerDto.Email, playerDto.Password);
            if (user != null)
                claim = await UnitOfWork.UserManager.CreateIdentityAsync(user,
                                            DefaultAuthenticationTypes.ApplicationCookie);
            return claim;
        }

        public async Task<OperationDetails> Create(PlayerDTO playerDTO)
        {
            var player = await UnitOfWork.UserManager.FindByEmailAsync(playerDTO.Email);
            if (player == null)
            {
                player = new ApplicationUser() { Email = playerDTO.Email, UserName = playerDTO.Email };
                var result = await UnitOfWork.UserManager.CreateAsync(player, playerDTO.Password);
                if (result.Errors.Count() > 0)
                {
                    return new OperationDetails(false, result.Errors.FirstOrDefault(), "");
                }
                PlayerProfile playerProfile = new PlayerProfile() { PlayerId = player.Id, Age = playerDTO.Age, Name = playerDTO.Name, Surname = playerDTO.Surname };
                UnitOfWork.PlayerManager.Create(playerProfile);
                UnitOfWork.Save();
                return new OperationDetails(true, "Регистрация успешно пройдена", "");
            }
            else
            {
                return new OperationDetails(true, "Пользователь уже существует", "Email");
            }
        }

        public PlayerDTO Find(string PlayerId)
        {
            var player = UnitOfWork.PlayerManager.Find(PlayerId);
            if (player != null)
            {
                var result = new PlayerDTO() { Email = player.ApplicationUser.Email,
                    Age = player.Age,
                    Name = player.Name,
                    Surname = player.Surname,
                    UserName = player.ApplicationUser.UserName};
                return result;
            }
            else return null;
        }

        public void ModifyPlayer(PlayerDTO playerDTO)
        {
            var player = UnitOfWork.PlayerManager.Find(playerDTO.Id);
            if (player != null)
            {
                player.Age = playerDTO.Age;
                player.Name = playerDTO.Name;
                player.Surname = playerDTO.Surname;
                player.ApplicationUser.UserName = playerDTO.UserName;
                //UnitOfWork.PlayerManager.Modify(player);
                UnitOfWork.Save();
            }
        }

        public void Dispose()
        {
            UnitOfWork.Dispose();
        }
    }
}
