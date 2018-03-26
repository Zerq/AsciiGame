using Omnicatz.Console;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Omnicatz.GameEngine.State
{
    public interface IState: IDisposable
    {
        void Pause();
        void Resume();
        void Update(GameTime time);
        void Render(GameTime time, IConsole console);
    }
}
