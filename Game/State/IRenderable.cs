using Omnicatz.Console;

namespace Omnicatz.GameEngine.State
{
    public interface IRenderable
    {
        void Render(GameTime time, IConsole console);
    }
}
