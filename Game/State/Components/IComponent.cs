using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Omnicatz.GameEngine.State.Components
{
    public interface IComponent
    {
        void Update(GameTime gameTime);
        void Render(GameTime gameTime);
    }
}
