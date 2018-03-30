using Omnicatz.Console;
using Omnicatz.GameEngine.State;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Omnicatz.GameEngine.UI.Menu
{
    public class MenuUpdateBehaviour : IBehaviour, IUpdatable
    {
        public MenuUpdateBehaviour() {

        }

        public void Update(GameTime time, IConsoleInput input) {

        }

        public Dictionary<string, Action> Options { get; private set; } = new Dictionary<string, Action>();

        public void Pause()
        {
            throw new NotImplementedException();
        }

        public void Resume()
        {
            throw new NotImplementedException();
        }

        public void Update(GameTime time)
        {
          
        }

        public void Wrapup()
        {
            throw new NotImplementedException();
        }
    }
}
