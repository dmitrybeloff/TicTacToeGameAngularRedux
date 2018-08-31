using Ninject.Modules;
using SnakeGame.DAL.Interfaces;
using SnakeGame.DAL.Repositories;

namespace SnakeGame.BLL.Infrastructure
{
    public class UnitOfWorkModule : NinjectModule
    {
        private string connectionString;

        public UnitOfWorkModule(string connection)
        {
            connectionString = connection;
        }

        public override void Load()
        {
            Bind<IUnitOfWork>().To<UnitOfWork>().WithConstructorArgument(connectionString);
        }
    }
}
