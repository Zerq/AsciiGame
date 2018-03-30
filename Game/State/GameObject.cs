using System;
using System.Collections.Generic;
using System.Linq;
using Ninject.Modules;
using Omnicatz.Console;

namespace Omnicatz.GameEngine.State
{
    public abstract class GameObject : NinjectModule, IDisposable
    {
        public GameObject(){}

        public void Register<I,T>(T instance) where I : IBehaviour where T : I {
            this.Bind<I>().ToConstant(instance);
            this.Behaviours.Add(instance);
        }

        public ICollection<IBehaviour> Behaviours { get; private set; } = new List<IBehaviour>();

      
        public void Update(GameTime time, IConsoleInput input) {
            var updatables = this.Behaviours.Where(n => n.GetType().IsAssignableFrom(typeof(IUpdatable))).Cast<IUpdatable>();
            foreach (var updater in updatables) {
                updater.Update(time, input);
            }
        }

        public void Render(GameTime time, IConsoleOutput console)
        {
            var updatables = this.Behaviours.Where(n => n.GetType().IsAssignableFrom(typeof(IRenderable))).Cast<IRenderable>();
            foreach (var renderer in updatables)
            {
                renderer.Render(time, console);
            }
        }

        public void Pause()
        {
            foreach (var item in Behaviours)
            {
                item.Pause();
            }
        }

        public void Resume()
        {
            foreach (var item in Behaviours)
            {
                item.Resume();
            }
        }

        public override void Dispose(bool disposing)
        {           
            var updatables = this.Behaviours.Where(n => n.GetType().IsAssignableFrom(typeof(IDisposable))).Cast<IDisposable>();
            foreach (var updater in updatables)
            {
                updater.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
