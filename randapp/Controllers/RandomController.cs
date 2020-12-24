using System;
using Microsoft.AspNetCore.Mvc;

namespace randapp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RandomController : ControllerBase
    {
        [HttpGet]
        public int Get()
        {
            var rng = new Random();
            return rng.Next(1, 101);
        }
    }
}
