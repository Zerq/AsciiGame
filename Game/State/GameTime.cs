using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Omnicatz.GameEngine.State
{
    public class GameTime
    {
        private DateTime gameStart = new DateTime();
        private DateTime lastUpdate = new DateTime();
        public void Update() { lastUpdate = DateTime.Now; }
        TimeSpan TotalElapsed => DateTime.Now - gameStart;
        TimeSpan ElapsedSinceUpdate => DateTime.Now - lastUpdate;
    }
}
