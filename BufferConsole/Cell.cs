using System;
 
namespace Omnicatz.Console
{
    public class Cell
    {
      public char Data { get; set; }
        public ConsoleColor Fore { get; set; } = ConsoleColor.White;
        public ConsoleColor Back { get; set; } = ConsoleColor.Black;
    }
}
