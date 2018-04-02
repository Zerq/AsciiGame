import { Cell } from "./Cell.js";
import { Color } from "./Color.js";
import { IConsoleOutput } from "./IConsoleOutput.js";

export class ConsoleOutput implements IConsoleOutput {


    private initiateGridAsNull(width: number, height: number) {
        this.buffer = [];
        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
                if (!this.buffer[x]) {
                    this.buffer[x] = [];              
                }
                this.buffer[x][y] = null;
            }
        }
    }


    public constructor(width: number, height: number) {
        this.bufferHeight = height;
        this.bufferWidth = width;
        this.initiateGridAsNull(this.bufferWidth, this.bufferHeight);
    }

    public buffer: Cell[][];
    public GetBuffer(): Cell[][] {
        return this.buffer;
    }
    public Clear(): void {
        this.initiateGridAsNull(this.bufferWidth, this.bufferHeight);
    }
    public PrintChar(c: string): void {
        if (this.GetBuffer()[this.CursorX][this.CursorY] == null) {
            var item = new Cell();
            item.Data = c;
            item.Fore = this.Fore;
            item.Back = this.Back;
            this.GetBuffer()[this.CursorX][this.CursorY] = item;

        }
        else {
            this.GetBuffer()[this.CursorX][this.CursorY].Fore = this.Fore;
            this.GetBuffer()[this.CursorX][this.CursorY].Back = this.Back;
            this.GetBuffer()[this.CursorX][this.CursorY].Data = c;
        }
            

        if (this.CursorX + 1 >= this.BufferWidth) {
            this.BreakRow();
        }
        else {
            this.CursorX++;
        }
    }
    public Print(text: string): void {
        for (let c in text.split("")) {
            this.PrintChar(c);
        }
    }

    public ResetColor(): void {
        this.Fore = Color.White;
        this.Back = Color.Black;
    }
    public Reset(): void {
        this.CursorX = 0;
        this.CursorY = 0;
        this.Indent = 0;
    }
    public BreakRow(): void {
        if (this.CursorY + 1 < this.BufferHeight) {
            this.CursorY++;
            this.CursorX = this.Indent;
        }
    }
    public CursorX: number = 0;
    public CursorY: number = 0;
    public Indent: number = 0;
    public Fore: Color = Color.White;
    public Back: Color = Color.Black;

    public bufferWidth: number = 0;
    public get BufferWidth(): number { return this.bufferWidth; }

    public bufferHeight: number = 0;
    public get BufferHeight(): number { return this.bufferHeight; }

}