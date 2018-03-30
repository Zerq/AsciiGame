using System;

namespace Omnicatz.Console
{
    public interface IConsoleOutput
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
        int Indent { get; set; }
        ConsoleColor Fore { get; set; }
        ConsoleColor Back { get; set; }
        void Print(string text);        
        }
}
