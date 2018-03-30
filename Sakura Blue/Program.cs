using Omnicatz.Console;
using Omnicatz.GameEngine.State;
using Omnicatz.GameEngine.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakura_Blue
{

    public class TitleGraphicRender : IRenderable
    {
        IRectangle Rectangle { get; set; }
        public TitleGraphicRender(IRectangle rectangle ) {
            this.Rectangle = rectangle;
        }
        
        public void Render(GameTime time, IConsoleOutput console)
        {
            console.Indent = this.Rectangle.X;
            console.CursorX = Rectangle.X;
            console.CursorY = Rectangle.Y;
            console.Fore = ConsoleColor.Yellow;
            console.Print("S");
            console.Fore = ConsoleColor.Cyan;
            console.Print("a");
            console.Fore = ConsoleColor.Gray;
            console.Print("k");
            console.Fore = ConsoleColor.Red;
            console.Print("u");
            console.Fore = ConsoleColor.Blue;
            console.Print("r");
            console.Fore = ConsoleColor.Magenta;
            console.Print("a");     
            console.Print(" ");
            console.Fore = ConsoleColor.Gray;
            console.Print("B");
            console.Fore = ConsoleColor.Yellow;
            console.Print("l");
            console.Fore = ConsoleColor.Cyan;
            console.Print("u");
            console.Fore = ConsoleColor.Red;
            console.Print("e");

        }
    }

    public class SakuraBlueGameObject : GameObject {
        public override void Load()
        {
           
        }
    }


    public class MainMenu: GameState
    {
        public MainMenu() {
            GameObject menuGraphic = new SakuraBlueGameObject();
            IRectangle rect = new Rectangle();
            rect.Width = 16;
            rect.Height = 1;
            rect.X = 5;
            rect.Y = 5;
            this.Components.Add(menuGraphic);
         
        }
    }


    class Program
    {
        static Runner runner = new Runner();

        static void Main(string[] args)
        {
            runner.States.Add(new MainMenu());
            runner.ActivateState(runner.States.First());
            runner.Run();
        }
    }
}
