using System;

namespace Omnicatz.Console
{
    public interface IConsole
    {
        void Flush();
        Cell[,] Buffer { get; }
        void Clear();
        void Print(char c);     
        void ResetColor();
        void Reset();
        void BreakRow();
        int CursorX { get; set; }
        int CursorY { get; set; }
        ConsoleColor Fore { get; set; }
        ConsoleColor Back { get; set; }
        void Print(string text);
        int Read();
        ConsoleKeyInfo ReadKey();
        ConsoleKeyInfo ReadKey(bool intercept);
        string ReadLine();
        void Beep();
        void Beep(int frequency, int duration);
        bool KeyAvailable { get; }
        
        }
 

}
