using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

// create me a hello world controller as API controller

[ApiController]
[Route("api/[controller]")]
public class HelloWorldController : ControllerBase
{
	[HttpGet]
	public IActionResult Get()
	{
		return Ok("Hello JR student!");
	}

	[HttpGet("name")]
	public IActionResult GetName(string name)
	{
		return Ok($"Hello {name}!");
	}
}