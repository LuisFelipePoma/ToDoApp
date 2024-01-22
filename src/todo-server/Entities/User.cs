namespace todo_server.Entities
{
	public record User
	{
		public Guid Id { get; set; }
		public string Username { get; set; } = string.Empty;
		public string PasswordHash { get; set; } = string.Empty;
	}
}