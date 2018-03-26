using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Omnicatz.GameEngine.State
{
    public class Runner
    {
        public ICollection<IState> States { get; private set; } = new List<IState>();
        public IState State { get; private set; }
        public void ActivateState(IState state) {
            if (this.State != null)
            {
                this.State.Pause();
            }
            this.State = state;
            this.State.Resume();
             
        }
        public bool IsRunning = true;
        public GameTime Time { get; private set; } = new GameTime();
        public Console.BufferConsole console = new Console.BufferConsole(System.Console.BufferWidth, 40 );
        public void Run() {
        
            while (IsRunning) {
                Time.Update();
                this.State.Update(Time);
                this.State.Render(Time, console);
                console.Flush();
            }
        }

    }
}
