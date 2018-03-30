using System;
using Omnicatz.Console;
using OriginalConsole = System.Console;

namespace Omnicatz.GameEngine
{
    class Program
    {
        static void Main(string[] args)
        {
            ConsoleOutput console = new ConsoleOutput(OriginalConsole.BufferWidth, 29);
            IConsoleInput input = new ConsoleInput();
            int i = 0;
            Random random;
            while (true)
            {
              
                 random = new Random(DateTime.Now.Millisecond + i);

                OriginalConsole.Clear();
                for (var y = 0; y < 29; y++)
                {
                    for (var x = 0; x < console.BufferWidth; x++)
                    {

                        console.Fore = (ConsoleColor)random.Next(16);
                        console.Back = (ConsoleColor)random.Next(16);

                        console.Print('#');
                    }

                }
                console.Reset();
                console.CursorY = 10;
                console.CursorX = 5;
                console.Fore = ConsoleColor.White;
                console.Back = ConsoleColor.Black;
                console.Print("Burklax");

                console.Flush();
                input.Read();
            }
        }
    }
}
