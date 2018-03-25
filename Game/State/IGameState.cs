using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Omnicatz.GameEngine.State
{
    public interface IGameState
    {
        void Load();
        void Unload();
        void Pause();
        void Resume();
        void Loop();
    }
}
