using System;

namespace Omnicatz.Console
{
    public interface IAudioOutput {
        void Beep();
        void Beep(int frequency, int duration);
    }
   
}
