using Omnicatz.GameEngine.State;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Omnicatz.GameEngine.UI
{
    public class Rectangle : IRectangle
    {      
      public int X { get; set; }
        public int Y { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public bool Overlap(int x, int y) {
         return x < X &&
                x > X &&
                y < Y &&
                y > Y;

        }
        public bool Overlap(IRectangle target) {
                                           return 
                !(this.X + this.Width < target.X || 
                target.X + target.Width < this.X || 
                this.Y + this.Height < target.Y && target.Y + target.Height < this.Y);
                                           }

        public void Pause(){}
        public void Resume(){}
        public void Wrapup(){}
    }
}