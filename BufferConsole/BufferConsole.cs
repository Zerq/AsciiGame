using System;
using System.Linq;
using OriginalConsole = System.Console;
 
namespace Omnicatz.Console
{
    public class ConsoleOutput : IConsoleOutput
    {
        public void Flush() {
            for (var x = 0; x < this.BufferWidth; x++){
                for (var y = 0; y < this.BufferHeight; y++)
                {

                    if (this.Buffer[x, y] != null) {
                        OriginalConsole.SetCursorPosition(x, y);
                        if (this.Buffer[x, y].Fore != OriginalConsole.ForegroundColor)
                        {
                            OriginalConsole.ForegroundColor = this.Buffer[x, y].Fore;
                        }
                        if (this.Buffer[x, y].Back != OriginalConsole.BackgroundColor)
                        {
                            OriginalConsole.BackgroundColor = this.Buffer[x, y].Back;
                        }
                        OriginalConsole.Write(this.Buffer[x, y].Data);
                      }
                  
                }
            }
        }
        public ConsoleOutput(int w, int h) {
            this.Buffer = new Cell[w, h];
        }

        private int cursorX = 0;
        private int cursorY = 0;

        public int BufferWidth => Buffer.GetLength(0);
        public int BufferHeight => Buffer.GetLength(1);

        public ConsoleColor Fore { get; set; } = ConsoleColor.White;
        public ConsoleColor Back { get; set; } = ConsoleColor.Black;

        public int CursorX {
            get {
                return this.cursorX;
            }
            set {
                if (value < 0)
                {
                    throw new IndexOutOfRangeException("CursorX is out of range less the 0");
                }
                if (value >= this.BufferWidth)
                {
                    throw new IndexOutOfRangeException("CursorX is out of range more then max");
                }
                this.cursorX = value;
            }
        }
        public int CursorY {
            get {
                return this.cursorY;
            }
            set {
                if (value < 0)
                {
                    throw new IndexOutOfRangeException("CursorY is out of range less the 0");
                }
                if (value >= this.BufferHeight)
                {
                    throw new IndexOutOfRangeException("CursorY is out of range more then max");
                }
                this.cursorY = value;
            }
        }
        public Cell[,] Buffer { get; set; }
        public int Indent { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        public void Clear()
        {
            Buffer = new Cell[Buffer.GetLength(0), Buffer.GetLength(1)];
            this.Indent = 0;
        }
        public void Reset() {
            this.cursorX = 0;
            this.cursorY = 0;
            this.Indent = 0;
        }
        public void Print(string text) {
            foreach (char c in text.ToArray()) { Print(c); }
        }

        public void Print(char c)
        {
            if (this.Buffer[this.CursorX, this.CursorY] == null)
            {
                var item = new Cell() { Data = c, Fore = this.Fore, Back = this.Back };
                this.Buffer[this.CursorX, this.CursorY] = item; 

            }
            else {
                this.Buffer[this.CursorX, this.CursorY].Fore = Fore;
                this.Buffer[this.CursorX, this.CursorY].Back = Back;
                this.Buffer[this.CursorX, this.CursorY].Data = c;
            }
        
   
            if (this.cursorX + 1 >= BufferWidth)
            {
                BreakRow();
            }
            else {
                CursorX++;
            }


        }
        public void BreakRow() {
            if (this.CursorY + 1 < this.BufferHeight)
            {
                this.cursorY++;
                this.cursorX = Indent;
            }
        }
        public void ResetColor()
        {
            this.Fore = ConsoleColor.White;
            this.Back = ConsoleColor.Black;
        }

    }
}
