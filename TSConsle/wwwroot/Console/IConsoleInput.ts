import { ConsoleKeyInfo } from "./ConsoleKeyInfo.js";

export interface IConsoleInput {
    getKeyAvailable(): boolean;
    Read():number;
    ReadKey(): ConsoleKeyInfo;
    ReadKey(intercept: boolean): ConsoleKeyInfo;
    ReadLine(): string;
    }