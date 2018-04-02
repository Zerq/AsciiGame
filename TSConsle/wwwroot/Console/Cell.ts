import { Color } from "./Color.js";

export class Cell {
    private data: string = "";
    public get Data(): string { return this.data; }
    public set Data(value: string) { this.data = value; }

    private fore: Color = Color.White;
    public get Fore(): Color { return this.fore; }
    public set Fore(value: Color) { this.fore = value; }

    private back: Color = Color.Black;
    public get Back(): Color { return this.back; }
    public set Back(value:Color) { this.back = value; }


     
}