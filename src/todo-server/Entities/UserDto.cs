namespace todo_server.Entities
{
	public record UserDto
	{
		public required string Username { get; set; }
		public required string Password { get; set; }
	}
}