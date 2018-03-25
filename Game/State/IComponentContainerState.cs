using System.Collections.Generic;
using Omnicatz.GameEngine.State.Components;

namespace Omnicatz.GameEngine.State
{
    public interface IComponentContainerState : IGameState
    {
        ICollection<IComponent> Components { get; set; }
    }
}
