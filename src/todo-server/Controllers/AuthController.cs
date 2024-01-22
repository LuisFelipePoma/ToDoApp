using Microsoft.AspNetCore.Mvc;
using todo_server.Entities;

namespace todo_server.Controllers
{
	[Route("auth/[controller]")]
	[ApiController]
	public class AuthController : ControllerBase
	{
		public static User user = new User();

		// POST /auth/register
		[HttpPost("register")]
		public ActionResult<User> Register(UserDto request)
		{
			string passwordHash = BCrypt.Net.BCrypt.HashPassword(request.Password);
			user.Username = request.Username;
			user.PasswordHash = passwordHash;
			return Ok("Success");
		}

		// POST /auth/login
		[HttpPost("login")]
		public ActionResult<User> Login(UserDto request)
		{
			if (user.Username != request.Username)
			{
				return BadRequest("Invalid username or password");
			}
			bool isPasswordValid = BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash);
			if (!isPasswordValid)
			{
				return BadRequest("Invalid username or password");
			}
			return Ok("Success");
		}
	}
}