import { IAudioOutput } from "./IAudioOutput.js";

export class AudioOutput implements IAudioOutput {
    private context: AudioContext;

    public constructor() {
        this.context = AudioContext && new AudioContext();
    }

    Beep(frequency: number = 400, duration: number = 2, amplitude: number = 100): void {
        if (!this.context) return;
        var oscilator = this.context.createOscillator();
        var gain = this.context.createGain();
        oscilator.connect(gain);
        oscilator.frequency.value = frequency;
        gain.connect(this.context.destination);
        gain.gain.value = amplitude / 100;
        oscilator.start(this.context.currentTime);
        oscilator.stop(this.context.currentTime + duration / 1000);
    }
}