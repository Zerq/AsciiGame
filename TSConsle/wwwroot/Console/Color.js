export class Color extends String {
    constructor(source) {
        super(source);
    }
    static pad(source, width, padCharacter) {
        padCharacter = padCharacter || '0';
        source = source + '';
        return source.length >= width ? source : new Array(width - source.length + 1).join(padCharacter) + source;
    }
    static hexPad(num) {
        return this.pad(num.toString(16), 2, "0");
    }
    static Rgb(r, g, b) {
        return new Color(`#${this.hexPad(r)}${this.hexPad(g)}${this.hexPad(b)}`);
    }
    static Rgba(r, g, b, a) {
        return new Color(`rgba(${r},${g},${b},${a})`);
    }
    static Hsl(h, s, l) {
        return new Color(`hsl(${h},${s}%,${l}%)`);
    }
    static Hsla(h, s, l, a) {
        return new Color(`hsl(${h},${s}%,${l}%,${a})`);
    }
}
Color.AliceBlue = new Color("#F0F8FF");
Color.AntiqueWhite = new Color("#FAEBD7");
Color.Aqua = new Color("#00FFFF");
Color.Aquamarine = new Color("#7FFFD4");
Color.Azure = new Color("#F0FFFF");
Color.Beige = new Color("#F5F5DC");
Color.Bisque = new Color("#FFE4C4");
Color.Black = new Color("#000000");
Color.BlanchedAlmond = new Color("#FFEBCD");
Color.Blue = new Color("#0000FF");
Color.BlueViolet = new Color("#8A2BE2");
Color.Brown = new Color("#A52A2A");
Color.BurlyWood = new Color("#DEB887");
Color.CadetBlue = new Color("#5F9EA0");
Color.Chartreuse = new Color("#7FFF00");
Color.Chocolate = new Color("#D2691E");
Color.Coral = new Color("#FF7F50");
Color.CornflowerBlue = new Color("#6495ED");
Color.Cornsilk = new Color("#FFF8DC");
Color.Crimson = new Color("#DC143C");
Color.Cyan = new Color("#00FFFF");
Color.DarkBlue = new Color("#00008B");
Color.DarkCyan = new Color("#008B8B");
Color.DarkGoldenRod = new Color("#B8860B");
Color.DarkGray = new Color("#A9A9A9");
Color.DarkGrey = new Color("#A9A9A9");
Color.DarkGreen = new Color("#006400");
Color.DarkKhaki = new Color("#BDB76B");
Color.DarkMagenta = new Color("#8B008B");
Color.DarkOliveGreen = new Color("#556B2F");
Color.DarkOrange = new Color("#FF8C00");
Color.DarkOrchid = new Color("#9932CC");
Color.DarkRed = new Color("#8B0000");
Color.DarkSalmon = new Color("#E9967A");
Color.DarkSeaGreen = new Color("#8FBC8F");
Color.DarkSlateBlue = new Color("#483D8B");
Color.DarkSlateGray = new Color("#2F4F4F");
Color.DarkSlateGrey = new Color("#2F4F4F");
Color.DarkTurquoise = new Color("#00CED1");
Color.DarkViolet = new Color("#9400D3");
Color.DeepPink = new Color("#FF1493");
Color.DeepSkyBlue = new Color("#00BFFF");
Color.DimGray = new Color("#696969");
Color.DimGrey = new Color("#696969");
Color.DodgerBlue = new Color("#1E90FF");
Color.FireBrick = new Color("#B22222");
Color.FloralWhite = new Color("#FFFAF0");
Color.ForestGreen = new Color("#228B22");
Color.Fuchsia = new Color("#FF00FF");
Color.Gainsboro = new Color("#DCDCDC");
Color.GhostWhite = new Color("#F8F8FF");
Color.Gold = new Color("#FFD700");
Color.GoldenRod = new Color("#DAA520");
Color.Gray = new Color("#808080");
Color.Grey = new Color("#808080");
Color.Green = new Color("#008000");
Color.GreenYellow = new Color("#ADFF2F");
Color.HoneyDew = new Color("#F0FFF0");
Color.HotPink = new Color("#FF69B4");
Color.IndianRed = new Color("#CD5C5C");
Color.Indigo = new Color("#4B0082");
Color.Ivory = new Color("#FFFFF0");
Color.Khaki = new Color("#F0E68C");
Color.Lavender = new Color("#E6E6FA");
Color.LavenderBlush = new Color("#FFF0F5");
Color.LawnGreen = new Color("#7CFC00");
Color.LemonChiffon = new Color("#FFFACD");
Color.LightBlue = new Color("#ADD8E6");
Color.LightCoral = new Color("#F08080");
Color.LightCyan = new Color("#E0FFFF");
Color.LightGoldenRodYellow = new Color("#FAFAD2");
Color.LightGray = new Color("#D3D3D3");
Color.LightGrey = new Color("#D3D3D3");
Color.LightGreen = new Color("#90EE90");
Color.LightPink = new Color("#FFB6C1");
Color.LightSalmon = new Color("#FFA07A");
Color.LightSeaGreen = new Color("#20B2AA");
Color.LightSkyBlue = new Color("#87CEFA");
Color.LightSlateGray = new Color("#778899");
Color.LightSlateGrey = new Color("#778899");
Color.LightSteelBlue = new Color("#B0C4DE");
Color.LightYellow = new Color("#FFFFE0");
Color.Lime = new Color("#00FF00");
Color.LimeGreen = new Color("#32CD32");
Color.Linen = new Color("#FAF0E6");
Color.Magenta = new Color("#FF00FF");
Color.Maroon = new Color("#800000");
Color.MediumAquaMarine = new Color("#66CDAA");
Color.MediumBlue = new Color("#0000CD");
Color.MediumOrchid = new Color("#BA55D3");
Color.MediumPurple = new Color("#9370DB");
Color.MediumSeaGreen = new Color("#3CB371");
Color.MediumSlateBlue = new Color("#7B68EE");
Color.MediumSpringGreen = new Color("#00FA9A");
Color.MediumTurquoise = new Color("#48D1CC");
Color.MediumVioletRed = new Color("#C71585");
Color.MidnightBlue = new Color("#191970");
Color.MintCream = new Color("#F5FFFA");
Color.MistyRose = new Color("#FFE4E1");
Color.Moccasin = new Color("#FFE4B5");
Color.NavajoWhite = new Color("#FFDEAD");
Color.Navy = new Color("#000080");
Color.OldLace = new Color("#FDF5E6");
Color.Olive = new Color("#808000");
Color.OliveDrab = new Color("#6B8E23");
Color.Orange = new Color("#FFA500");
Color.OrangeRed = new Color("#FF4500");
Color.Orchid = new Color("#DA70D6");
Color.PaleGoldenRod = new Color("#EEE8AA");
Color.PaleGreen = new Color("#98FB98");
Color.PaleTurquoise = new Color("#AFEEEE");
Color.PaleVioletRed = new Color("#DB7093");
Color.PapayaWhip = new Color("#FFEFD5");
Color.PeachPuff = new Color("#FFDAB9");
Color.Peru = new Color("#CD853F");
Color.Pink = new Color("#FFC0CB");
Color.Plum = new Color("#DDA0DD");
Color.PowderBlue = new Color("#B0E0E6");
Color.Purple = new Color("#800080");
Color.RebeccaPurple = new Color("#663399");
Color.Red = new Color("#FF0000");
Color.RosyBrown = new Color("#BC8F8F");
Color.RoyalBlue = new Color("#4169E1");
Color.SaddleBrown = new Color("#8B4513");
Color.Salmon = new Color("#FA8072");
Color.SandyBrown = new Color("#F4A460");
Color.SeaGreen = new Color("#2E8B57");
Color.SeaShell = new Color("#FFF5EE");
Color.Sienna = new Color("#A0522D");
Color.Silver = new Color("#C0C0C0");
Color.SkyBlue = new Color("#87CEEB");
Color.SlateBlue = new Color("#6A5ACD");
Color.SlateGray = new Color("#708090");
Color.SlateGrey = new Color("#708090");
Color.Snow = new Color("#FFFAFA");
Color.SpringGreen = new Color("#00FF7F");
Color.SteelBlue = new Color("#4682B4");
Color.Tan = new Color("#D2B48C");
Color.Teal = new Color("#008080");
Color.Thistle = new Color("#D8BFD8");
Color.Tomato = new Color("#FF6347");
Color.Turquoise = new Color("#40E0D0");
Color.Violet = new Color("#EE82EE");
Color.Wheat = new Color("#F5DEB3");
Color.White = new Color("#FFFFFF");
Color.WhiteSmoke = new Color("#F5F5F5");
Color.Yellow = new Color("#FFFF00");
Color.YellowGreen = new Color("#9ACD32");
//# sourceMappingURL=Color.js.map