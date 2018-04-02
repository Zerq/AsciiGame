import { Color } from "./Color.js";
export class Cell {
    constructor() {
        this.data = "";
        this.fore = Color.White;
        this.back = Color.Black;
    }
    get Data() { return this.data; }
    set Data(value) { this.data = value; }
    get Fore() { return this.fore; }
    set Fore(value) { this.fore = value; }
    get Back() { return this.back; }
    set Back(value) { this.back = value; }
}
//# sourceMappingURL=Cell.js.map