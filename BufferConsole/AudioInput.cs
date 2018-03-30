using System;
using System.Linq;
using OriginalConsole = System.Console;
 
namespace Omnicatz.Console
{
    public class AudioOutput : IAudioOutput

    {
        public void Beep()
        {
              System.Console.Beep();
        }

        public void Beep(int frequency, int duration)
        {
            System.Console.Beep(frequency, duration);
        }
    }
}
