using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Omnicatz.Console;
namespace Omnicatz.Console.Test
{
    [TestClass]
    public class BufferConsoleTest
    {
        private ConsoleOutput setup() {
             var console = new ConsoleOutput(3, 3);
            console.Print('a');
            console.Print('b');
            console.Print('c');
            console.Back = ConsoleColor.DarkYellow;
            console.Print('d');
            console.Print('e');
            console.Print('f');
            console.Fore = ConsoleColor.Cyan;
            console.Print('g');
            console.Print('h');
            console.Print('i');

            return console;
        }

        [TestMethod]
        public void Omnnicatz_Console_Print_Char()
        {
            var console = setup();
            Assert.AreEqual('a', console.Buffer[0, 0].Data);
            Assert.AreEqual('b', console.Buffer[1, 0].Data);
            Assert.AreEqual('c', console.Buffer[2, 0].Data);
            Assert.AreEqual(ConsoleColor.White, console.Buffer[2, 0].Fore);
            Assert.AreEqual('d', console.Buffer[0, 1].Data);
            Assert.AreEqual(ConsoleColor.DarkYellow, console.Buffer[0, 1].Back);
            Assert.AreEqual('e', console.Buffer[1, 1].Data);
            Assert.AreEqual('f', console.Buffer[2, 1].Data);
            Assert.AreEqual('g', console.Buffer[0, 2].Data);
            Assert.AreEqual(ConsoleColor.Cyan, console.Buffer[0, 2].Fore);
            Assert.AreEqual('h', console.Buffer[1, 2].Data);
            Assert.AreEqual('i', console.Buffer[2, 2].Data);
        }
        
        [TestMethod]
        public void Omnnicatz_Console_Clear()
        {
            var console = setup();
            console.Clear();
            Assert.AreEqual(null,console.Buffer[0, 0]);
            Assert.AreEqual(null, console.Buffer[1, 0]);
            Assert.AreEqual(null, console.Buffer[2, 0]);
            Assert.AreEqual(null, console.Buffer[0, 1]);
            Assert.AreEqual(null, console.Buffer[1, 1]);
            Assert.AreEqual(null, console.Buffer[2, 1]);
            Assert.AreEqual(null, console.Buffer[0, 2]);
            Assert.AreEqual(null, console.Buffer[1, 2]);
            Assert.AreEqual(null, console.Buffer[2, 2]);

        }

        [TestMethod]
        public void Omnnicatz_Console_ResetColor()
        {
            var console = setup();
            Assert.AreEqual(ConsoleColor.Cyan, console.Fore);
            Assert.AreEqual(ConsoleColor.DarkYellow, console.Back);
        }

        [TestMethod]
        public void Omnnicatz_Console_Reset()
        {
            var console = setup();
            console.Reset();
            Assert.AreEqual(0,console.CursorX);
            Assert.AreEqual(0,console.CursorY);
        }

        [TestMethod]
        public void Omnnicatz_Console_RowBreak()
        {
            var console = new ConsoleOutput(3, 5);
            console.Print('@');
            console.BreakRow();
   
            Assert.AreEqual(1, console.CursorY);
            Assert.AreEqual(0, console.CursorX);
        }

        [TestMethod]
        public void Omnnicatz_Console_Print_String()
        {
            var console = new ConsoleOutput(10, 3);
            console.Print("Bürklax");
            
            Assert.AreEqual('B', console.Buffer[0, 0].Data);
            Assert.AreEqual('ü', console.Buffer[1, 0].Data);
            Assert.AreEqual('r', console.Buffer[2, 0].Data);
            Assert.AreEqual('k', console.Buffer[3, 0].Data);
            Assert.AreEqual('l', console.Buffer[4, 0].Data);
            Assert.AreEqual('a', console.Buffer[5, 0].Data);
            Assert.AreEqual('x', console.Buffer[6, 0].Data);

 
        }


        [TestMethod]
        public void Omnnicatz_Console_Print_String_colors()
        {
            var console = new ConsoleOutput(10, 3);
            console.Fore = ConsoleColor.Blue;
            console.Back = ConsoleColor.DarkGray;
            console.Print("Bürklax");
            console.Reset();
            console.Fore = ConsoleColor.Cyan;
            console.Back = ConsoleColor.DarkMagenta;
            console.Print("Burklax");

            Assert.AreEqual('B', console.Buffer[0, 0].Data);
            Assert.AreEqual(ConsoleColor.Cyan, console.Buffer[0, 0].Fore);
            Assert.AreEqual(ConsoleColor.DarkMagenta,console.Buffer[0, 0].Back);

            Assert.AreEqual('u', console.Buffer[1, 0].Data);
            Assert.AreEqual(ConsoleColor.Cyan, console.Buffer[1, 0].Fore);
            Assert.AreEqual(ConsoleColor.DarkMagenta, console.Buffer[1, 0].Back);

            Assert.AreEqual('r', console.Buffer[2, 0].Data);
            Assert.AreEqual(ConsoleColor.Cyan, console.Buffer[2, 0].Fore);
            Assert.AreEqual(ConsoleColor.DarkMagenta, console.Buffer[2, 0].Back);

            Assert.AreEqual('k', console.Buffer[3, 0].Data);
            Assert.AreEqual(ConsoleColor.Cyan, console.Buffer[3, 0].Fore);
            Assert.AreEqual(ConsoleColor.DarkMagenta, console.Buffer[3, 0].Back);

            Assert.AreEqual('l', console.Buffer[4, 0].Data);
            Assert.AreEqual(ConsoleColor.Cyan, console.Buffer[4, 0].Fore);
            Assert.AreEqual(ConsoleColor.DarkMagenta, console.Buffer[4, 0].Back);

            Assert.AreEqual('a', console.Buffer[5, 0].Data);
            Assert.AreEqual(ConsoleColor.Cyan, console.Buffer[5, 0].Fore);
            Assert.AreEqual(ConsoleColor.DarkMagenta, console.Buffer[5, 0].Back);

            Assert.AreEqual('x', console.Buffer[6, 0].Data);
            Assert.AreEqual(ConsoleColor.Cyan, console.Buffer[6, 0].Fore);
            Assert.AreEqual(ConsoleColor.DarkMagenta, console.Buffer[6, 0].Back);
        }

    }
}
