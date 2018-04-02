import { Cell } from "./Cell.js";
import { Color } from "./Color.js";
export class ConsoleOutput {
    constructor(width, height) {
        this.CursorX = 0;
        this.CursorY = 0;
        this.Indent = 0;
        this.Fore = Color.White;
        this.Back = Color.Black;
        this.bufferWidth = 0;
        this.bufferHeight = 0;
        this.bufferHeight = height;
        this.bufferWidth = width;
        this.initiateGridAsNull(this.bufferWidth, this.bufferHeight);
    }
    initiateGridAsNull(width, height) {
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
    GetBuffer() {
        return this.buffer;
    }
    Clear() {
        this.initiateGridAsNull(this.bufferWidth, this.bufferHeight);
    }
    PrintChar(c) {
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
    Print(text) {
        for (let c in text.split("")) {
            this.PrintChar(c);
        }
    }
    ResetColor() {
        this.Fore = Color.White;
        this.Back = Color.Black;
    }
    Reset() {
        this.CursorX = 0;
        this.CursorY = 0;
        this.Indent = 0;
    }
    BreakRow() {
        if (this.CursorY + 1 < this.BufferHeight) {
            this.CursorY++;
            this.CursorX = this.Indent;
        }
    }
    get BufferWidth() { return this.bufferWidth; }
    get BufferHeight() { return this.bufferHeight; }
}
//# sourceMappingURL=ConsoleOutput.js.map