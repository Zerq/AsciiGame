import { Color } from './Console/Color.js';
import { ConsoleOutput } from './Console/ConsoleOutput.js';
function setup() {
    var console = new ConsoleOutput(3, 3);
    console.Print('a');
    console.Print('b');
    console.Print('c');
    console.Back = Color.DarkKhaki;
    console.Print('d');
    console.Print('e');
    console.Print('f');
    console.Fore = Color.Cyan;
    console.Print('g');
    console.Print('h');
    console.Print('i');
    return console;
}
function setup2() {
    var console = new ConsoleOutput(3, 3);
    console.Print('a');
    console.Print('b');
    console.Print('c');
    console.Back = Color.DarkKhaki;
    console.Print('d');
    console.Print('e');
    console.Print('f');
    console.Fore = Color.Cyan;
    console.Print('g');
    console.Print('h');
    console.Print('i');
    return console;
}
/* ___________________________________________________ */
QUnit.module("Console/Color.ts");
QUnit.test("Rgb", assert => {
    let actual = Color.Rgb(255, 255, 255);
    let expected = "#ffffff";
    assert.equal(actual, expected);
});
QUnit.test("Rgba", assert => {
    let actual = Color.Rgba(255, 255, 255, 0.5);
    let expected = "rgba(255,255,255,0.5)";
    assert.equal(actual, expected);
});
QUnit.test("Rgba", assert => {
    let actual = Color.Rgba(255, 255, 255, 0.5);
    let expected = "rgba(255,255,255,0.5)";
    assert.equal(actual, expected);
});
QUnit.test("Hsl", assert => {
    let actual = Color.Hsl(255, 100, 50);
    let expected = "hsl(255,100%,50%)";
    assert.equal(actual, expected);
});
QUnit.test("Hsla", assert => {
    let actual = Color.Hsla(255, 100, 50, 0.5);
    let expected = "hsl(255,100%,50%,0.5)";
    assert.equal(actual, expected);
});
/* ___________________________________________________ */
QUnit.module("Console/BufferConsole.ts");
QUnit.test("Omnnicatz_Console_Print_Char", assert => {
    let console = setup2();
    assert.equal('a', console.GetBuffer()[0][0].Data);
    assert.equal('b', console.GetBuffer()[1][0].Data);
    assert.equal('c', console.GetBuffer()[2][0].Data);
    assert.equal(Color.White, console.GetBuffer()[2][0].Fore);
    assert.equal('d', console.GetBuffer()[0][1].Data);
    assert.equal(Color.DarkKhaki, console.GetBuffer()[0][1].Back);
    assert.equal('e', console.GetBuffer()[1][1].Data);
    assert.equal('f', console.GetBuffer()[2][1].Data);
    assert.equal('g', console.GetBuffer()[0][2].Data);
    assert.equal(Color.Cyan, console.GetBuffer()[0][2].Fore);
    assert.equal('h', console.GetBuffer()[1][2].Data);
    assert.equal('i', console.GetBuffer()[2][2].Data);
});
QUnit.test("Omnnicatz_Console_Clear", assert => {
    let console = setup2();
    console.Clear();
    assert.equal(null, console.GetBuffer()[0][0]);
    assert.equal(null, console.GetBuffer()[1][0]);
    assert.equal(null, console.GetBuffer()[2][0]);
    assert.equal(null, console.GetBuffer()[0][1]);
    assert.equal(null, console.GetBuffer()[1][1]);
    assert.equal(null, console.GetBuffer()[2][1]);
    assert.equal(null, console.GetBuffer()[0][2]);
    assert.equal(null, console.GetBuffer()[1][2]);
    assert.equal(null, console.GetBuffer()[2][2]);
});
QUnit.test("Omnnicatz_Console_ResetColor", assert => {
    let console = setup2();
    assert.equal(Color.Cyan, console.Fore);
    assert.equal(Color.DarkKhaki, console.Back);
});
QUnit.test("Omnnicatz_Console_Reset", assert => {
    let console = setup2();
    console.Reset();
    assert.equal(0, console.CursorX);
    assert.equal(0, console.CursorY);
});
QUnit.test("Omnnicatz_Console_RowBreak", assert => {
    let console = new ConsoleOutput(3, 5);
    console.Print('@');
    console.BreakRow();
    assert.equal(1, console.CursorY);
    assert.equal(0, console.CursorX);
});
QUnit.test("Omnnicatz_Console_Print_String", assert => {
    let console = new ConsoleOutput(10, 3);
    console.Print("Bürklax");
    assert.equal('B', console.GetBuffer()[0][0].Data);
    assert.equal('ü', console.GetBuffer()[1][0].Data);
    assert.equal('r', console.GetBuffer()[2][0].Data);
    assert.equal('k', console.GetBuffer()[3][0].Data);
    assert.equal('l', console.GetBuffer()[4][0].Data);
    assert.equal('a', console.GetBuffer()[5][0].Data);
    assert.equal('x', console.GetBuffer()[6][0].Data);
});
QUnit.test("Omnnicatz_Console_Print_String_colors", assert => {
    var console = new ConsoleOutput(10, 3);
    console.Fore = Color.Blue;
    console.Back = Color.DarkGray;
    console.Print("Bürklax");
    console.Reset();
    console.Fore = Color.Cyan;
    console.Back = Color.DarkMagenta;
    console.Print("Burklax");
    assert.equal('B', console.GetBuffer()[0][0].Data);
    assert.equal(Color.Cyan, console.GetBuffer()[0][0].Fore);
    assert.equal(Color.DarkMagenta, console.GetBuffer()[0][0].Back);
    assert.equal('u', console.GetBuffer()[1][0].Data);
    assert.equal(Color.Cyan, console.GetBuffer()[1][0].Fore);
    assert.equal(Color.DarkMagenta, console.GetBuffer()[1][0].Back);
    assert.equal('r', console.GetBuffer()[2][0].Data);
    assert.equal(Color.Cyan, console.GetBuffer()[2][0].Fore);
    assert.equal(Color.DarkMagenta, console.GetBuffer()[2][0].Back);
    assert.equal('k', console.GetBuffer()[3][0].Data);
    assert.equal(Color.Cyan, console.GetBuffer()[3][0].Fore);
    assert.equal(Color.DarkMagenta, console.GetBuffer()[3][0].Back);
    assert.equal('l', console.GetBuffer()[4][0].Data);
    assert.equal(Color.Cyan, console.GetBuffer()[4][0].Fore);
    assert.equal(Color.DarkMagenta, console.GetBuffer()[4][0].Back);
    assert.equal('a', console.GetBuffer()[5][0].Data);
    assert.equal(Color.Cyan, console.GetBuffer()[5][0].Fore);
    assert.equal(Color.DarkMagenta, console.GetBuffer()[5][0].Back);
    assert.equal('x', console.GetBuffer()[6][0].Data);
    assert.equal(Color.Cyan, console.GetBuffer()[6][0].Fore);
    assert.equal(Color.DarkMagenta, console.GetBuffer()[6][0].Back);
});
//# sourceMappingURL=ColorTest.js.map