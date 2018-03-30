using Omnicatz.Console;
using Omnicatz.GameEngine.State;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Omnicatz.GameEngine.UI.Menu
{
    public class MenuRenderBehaviour: IRenderable
    {
        public IRectangle Rectangle { get; private set; }
        public MenuRenderBehaviour(IRectangle rectangle) {
            this.Rectangle = rectangle;
        }

        public void Render(GameTime time, IConsoleOutput console)
        {
            throw new NotImplementedException();
        }
    }
}
