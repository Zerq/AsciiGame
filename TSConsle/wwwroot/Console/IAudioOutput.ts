export interface IAudioOutput {
    Beep(): void;
    Beep(frequency: number, duration: number): void;
}