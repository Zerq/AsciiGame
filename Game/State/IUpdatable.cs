﻿using Omnicatz.Console;

namespace Omnicatz.GameEngine.State
{
    public interface IUpdatable
    {
        void Update(GameTime time, IConsoleInput input);
    }
}
