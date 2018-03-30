using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Omnicatz.Console;

namespace Omnicatz.GameEngine.State
{
    public class GameState : IState
    {
        public ICollection<GameObject> Components { get; set; } = new List<GameObject>();

        public void Dispose()
        {
            foreach (var item in Components) {
                item.Dispose();
            }
        }

        public void Pause()
        {
           foreach (var item in Components)
            {
                item.Pause();
            }
        }

        public void Render(GameTime time, IConsoleOutput console)
        {
            foreach (var item in Components)
            {
                item.Render(time, console);
            }
        }

        public void Resume()
        {
            foreach (var item in Components)
            {
                item.Resume();
            }
        }
 
        public void Update(GameTime time, IConsoleInput input)
        {
            foreach (var item in Components)
            {
                item.Update(time, input);
            }
        }      
    }
}
