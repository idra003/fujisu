namespace FujisuBackend.Models
{
    public class Errors
    {
        public Errors() {
            messages = new List<string>();
        }
        
        public List<string> messages { get; set; }
    }
}