using Microsoft.AspNetCore.Mvc;
using mission5_pesce.Models;
using System.Diagnostics;

namespace mission5_pesce.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Booking()
        {
            return View();
        }
    }
}
