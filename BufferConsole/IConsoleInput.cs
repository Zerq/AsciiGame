using System;

namespace Omnicatz.Console
{
 
    public interface IConsoleInput {
        bool KeyAvailable { get; }
        int Read();
        ConsoleKeyInfo ReadKey();
        ConsoleKeyInfo ReadKey(bool intercept);
        string ReadLine();
    }
    
}
