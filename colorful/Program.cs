using Colorful;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Console = Colorful.Console;

namespace colorful
{
    class Program
    {
        static void Main(string[] args)
        {
            Bitmap bmp = new Bitmap("frog.png");

            for (int y = 0; y < bmp.Height; y++)
            {
                for (int x = 0; x < bmp.Width; x++)
                {
 
              
                    Console.Write("#", bmp.GetPixel(x, y));


                }
                Console.WriteLine();
            }



            Console.Read();
        }
    }
}
