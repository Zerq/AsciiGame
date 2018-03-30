using Omnicatz.GameEngine.State;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Omnicatz.GameEngine.UI
{
    public interface IRectangle : IBehaviour
    {
        int X { get; set; }
        int Y { get; set; }
        int Width { get; set; }
        int Height { get; set; }
        bool Overlap(int x, int y);
        bool Overlap(IRectangle target);
    }
}