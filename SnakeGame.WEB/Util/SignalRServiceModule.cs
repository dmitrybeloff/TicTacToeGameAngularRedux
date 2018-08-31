using Ninject.Modules;
using SnakeGame.BLL.Interfaces;
using SnakeGame.BLL.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SnakeGame.WEB.Util
{
    public class SignalRServiceModule : NinjectModule
    {
        public override void Load()
        {
            Bind<IGameService>().To<GameService>();
        }
    }
}