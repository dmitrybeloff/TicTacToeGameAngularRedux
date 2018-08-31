using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using Newtonsoft.Json;
using SnakeGame.BLL.DTO;
using SnakeGame.BLL.Interfaces;
using SnakeGame.WEB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace SnakeGame.WEB.Controllers
{
    public class AccountController : Controller
    {
        IPlayerService playerService;

        private IAuthenticationManager AuthenticationManager
        {
            get
            {
                return HttpContext.GetOwinContext().Authentication;
            }
        }

        private string UserId
        {
            get
            {
                return AuthenticationManager.User.Identity.GetUserId();
            }
        }

        public AccountController(IPlayerService service)
        {
            playerService = service;
        }

        public ActionResult Login(string returnUrl)
        {
            ViewBag.returnUrl = returnUrl;
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Login(LoginViewModel model, string returnUrl)
        {
            if (ModelState.IsValid)
            {
                PlayerDTO player = new PlayerDTO()
                {
                    Email = model.Email,
                    Password = model.Password
                };
                var claim = await playerService.Authenticate(player);

                if (claim == null)
                {
                    ModelState.AddModelError("", "Неверный логин или пароль.");
                }
                else
                {
                    AuthenticationManager.SignOut();
                    AuthenticationManager.SignIn(new AuthenticationProperties
                    {
                        IsPersistent = false
                    }, claim);
                    if (String.IsNullOrEmpty(returnUrl))
                        return RedirectToAction("Index", "Home");
                    else
                        return Redirect(returnUrl);

                }
            }
            return View();
        }

        public ActionResult Register()
        {
            return View();
        }        

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Register(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                PlayerDTO player = new PlayerDTO()
                {
                    Email = model.Email,
                    Password = model.Password,
                    Name = model.Name,
                    Surname = model.Surname
                };
                var result = await playerService.Create(player);
                if (!result.Succedeed)
                    ModelState.AddModelError(result.Property, result.Message);
                else return RedirectToAction("Index", "Home");
            }
            return View(model);
        }

        [Authorize]
        public ActionResult Find()
        {
            var result = playerService.Find(UserId);
            return Json(new { name = result.Name, surname = result.Surname, age = result.Age, username = result.UserName }, JsonRequestBehavior.AllowGet);
        }
        
        [HttpPost]
        [Authorize]
        public void ModifyPlayer(PlayerViewModel json)
        {            
            if (ModelState.IsValid)
            {
                playerService.ModifyPlayer(new PlayerDTO()
                {
                    Id = UserId,
                    Name = json.Name,
                    Surname = json.Surname,
                    Age = json.Age,
                    UserName = json.UserName
                });
            }
        }

        [Authorize]
        public ActionResult Logout()
        {
            AuthenticationManager.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
            return RedirectToAction("Index", "Home");
        }

        protected override void Dispose(bool disposing)
        {
            playerService.Dispose();
            base.Dispose(disposing);
        }
    }
}