using Omnicatz.Console;
using Omnicatz.GameEngine.State;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Omnicatz.GameEngine.UI.Graphic
{
  public class ImageBehaviour : IRenderable
    {
        public IRectangle Rectangle { get; private set; }
        public ImageBehaviour(IRectangle rectangle) {
            this.Rectangle = rectangle;
        }

        public void Render(GameTime time, IConsoleOutput console)
        {
            console.Indent = Rectangle.X;
        }
    }
}
