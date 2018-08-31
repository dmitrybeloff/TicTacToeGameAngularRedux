using System.ComponentModel.DataAnnotations;

namespace SnakeGame.WEB.Models
{
    public class RegisterViewModel
    {
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }


        public int Age { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
    }
}