using System;
using System.Linq;
using OriginalConsole = System.Console;
 
namespace Omnicatz.Console
{
    public class ConsoleInput : IConsoleInput
    {

        public bool KeyAvailable => throw new NotImplementedException();

        public int Read()
        {
            return System.Console.Read();
        }

        public ConsoleKeyInfo ReadKey()
        {
            return System.Console.ReadKey();
        }

        public ConsoleKeyInfo ReadKey(bool intercept)
        {
            return System.Console.ReadKey(intercept);
        }

        public string ReadLine()
        {
           return System.Console.ReadLine();
        }
    }
}
