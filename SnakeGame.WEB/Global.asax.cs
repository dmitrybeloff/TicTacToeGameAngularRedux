using Ninject.Modules;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using SnakeGame.BLL.Infrastructure;
using SnakeGame.WEB.Util;
using Ninject;
using Ninject.Web.Mvc;
using System.Web.Http;
using Microsoft.AspNet.SignalR;

namespace SnakeGame.WEB
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            // Dependencyresolver для mvc
            NinjectModule playerServiceModule = new PlayerServiceModule();
            NinjectModule unitOfWorkModule = new UnitOfWorkModule("SnakeGameDb");
            var kernel = new StandardKernel(playerServiceModule, unitOfWorkModule);
            DependencyResolver.SetResolver(new NinjectDependencyResolver(kernel));            

            // Dependencyresolver для signalR
            NinjectModule signalRServiceModule = new SignalRServiceModule();
            kernel = new StandardKernel(signalRServiceModule);
            GlobalHost.DependencyResolver = new NinjectSignalRDependencyResolver(kernel);
        }
    }
}
