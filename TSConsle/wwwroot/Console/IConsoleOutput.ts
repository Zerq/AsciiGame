import { Cell } from "./Cell.js";
import { Color } from "./Color.js";

export interface IConsoleOutput {
    GetBuffer(): Array<Array<Cell>>;
    Clear(): void;
    PrintChar(c: string): void;
    ResetColor(): void;
    Reset(): void;
    BreakRow(): void;
    CursorX: number;
    CursorY: number;
    Indent: number;
    Fore: Color;
    Back: Color;
    Print(text: string): void;        
}