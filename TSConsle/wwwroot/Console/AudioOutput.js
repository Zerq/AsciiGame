export class AudioOutput {
    constructor() {
        this.context = AudioContext && new AudioContext();
    }
    Beep(frequency = 400, duration = 2, amplitude = 100) {
        if (!this.context)
            return;
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
//# sourceMappingURL=AudioOutput.js.map