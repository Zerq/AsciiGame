export class Color extends String {
    public constructor(source: string) {
        super(source);
    }

    private static pad(source: string, width: number, padCharacter: string) {
        padCharacter = padCharacter || '0';
        source = source + '';
        return source.length >= width ? source : new Array(width - source.length + 1).join(padCharacter) + source;
    }
    private static hexPad(num: number): string {
        return this.pad(num.toString(16), 2, "0");
    }
    public static Rgb(r: number, g: number, b: number): Color {
        return new Color(`#${this.hexPad(r)}${this.hexPad(g)}${this.hexPad(b)}`);
    }
    public static Rgba(r: number, g: number, b: number, a: number): Color {
        return new Color(`rgba(${r},${g},${b},${a})`);
    }
    public static Hsl(h: number, s: number, l: number): Color {
        return new Color(`hsl(${h},${s}%,${l}%)`);
    }
    public static Hsla(h: number, s: number, l: number, a: number): Color {
        return new Color(`hsl(${h},${s}%,${l}%,${a})`);
    }

    public static AliceBlue = new Color("#F0F8FF");
    public static AntiqueWhite = new Color("#FAEBD7");
    public static Aqua = new Color("#00FFFF");
    public static Aquamarine = new Color("#7FFFD4");
    public static Azure = new Color("#F0FFFF");
    public static Beige = new Color("#F5F5DC");
    public static Bisque = new Color("#FFE4C4");
    public static Black = new Color("#000000");
    public static BlanchedAlmond = new Color("#FFEBCD");
    public static Blue = new Color("#0000FF");
    public static BlueViolet = new Color("#8A2BE2");
    public static Brown = new Color("#A52A2A");
    public static BurlyWood = new Color("#DEB887");
    public static CadetBlue = new Color("#5F9EA0");
    public static Chartreuse = new Color("#7FFF00");
    public static Chocolate = new Color("#D2691E");
    public static Coral = new Color("#FF7F50");
    public static CornflowerBlue = new Color("#6495ED");
    public static Cornsilk = new Color("#FFF8DC");
    public static Crimson = new Color("#DC143C");
    public static Cyan = new Color("#00FFFF");
    public static DarkBlue = new Color("#00008B");
    public static DarkCyan = new Color("#008B8B");
    public static DarkGoldenRod = new Color("#B8860B");
    public static DarkGray = new Color("#A9A9A9");
    public static DarkGrey = new Color("#A9A9A9");
    public static DarkGreen = new Color("#006400");
    public static DarkKhaki = new Color("#BDB76B");
    public static DarkMagenta = new Color("#8B008B");
    public static DarkOliveGreen = new Color("#556B2F");
    public static DarkOrange = new Color("#FF8C00");
    public static DarkOrchid = new Color("#9932CC");
    public static DarkRed = new Color("#8B0000");
    public static DarkSalmon = new Color("#E9967A");
    public static DarkSeaGreen = new Color("#8FBC8F");
    public static DarkSlateBlue = new Color("#483D8B");
    public static DarkSlateGray = new Color("#2F4F4F");
    public static DarkSlateGrey = new Color("#2F4F4F");
    public static DarkTurquoise = new Color("#00CED1");
    public static DarkViolet = new Color("#9400D3");
    public static DeepPink = new Color("#FF1493");
    public static DeepSkyBlue = new Color("#00BFFF");
    public static DimGray = new Color("#696969");
    public static DimGrey = new Color("#696969");
    public static DodgerBlue = new Color("#1E90FF");
    public static FireBrick = new Color("#B22222");
    public static FloralWhite = new Color("#FFFAF0");
    public static ForestGreen = new Color("#228B22");
    public static Fuchsia = new Color("#FF00FF");
    public static Gainsboro = new Color("#DCDCDC");
    public static GhostWhite = new Color("#F8F8FF");
    public static Gold = new Color("#FFD700");
    public static GoldenRod = new Color("#DAA520");
    public static Gray = new Color("#808080");
    public static Grey = new Color("#808080");
    public static Green = new Color("#008000");
    public static GreenYellow = new Color("#ADFF2F");
    public static HoneyDew = new Color("#F0FFF0");
    public static HotPink = new Color("#FF69B4");
    public static IndianRed = new Color("#CD5C5C");
    public static Indigo = new Color("#4B0082");
    public static Ivory = new Color("#FFFFF0");
    public static Khaki = new Color("#F0E68C");
    public static Lavender = new Color("#E6E6FA");
    public static LavenderBlush = new Color("#FFF0F5");
    public static LawnGreen = new Color("#7CFC00");
    public static LemonChiffon = new Color("#FFFACD");
    public static LightBlue = new Color("#ADD8E6");
    public static LightCoral = new Color("#F08080");
    public static LightCyan = new Color("#E0FFFF");
    public static LightGoldenRodYellow = new Color("#FAFAD2");
    public static LightGray = new Color("#D3D3D3");
    public static LightGrey = new Color("#D3D3D3");
    public static LightGreen = new Color("#90EE90");
    public static LightPink = new Color("#FFB6C1");
    public static LightSalmon = new Color("#FFA07A");
    public static LightSeaGreen = new Color("#20B2AA");
    public static LightSkyBlue = new Color("#87CEFA");
    public static LightSlateGray = new Color("#778899");
    public static LightSlateGrey = new Color("#778899");
    public static LightSteelBlue = new Color("#B0C4DE");
    public static LightYellow = new Color("#FFFFE0");
    public static Lime = new Color("#00FF00");
    public static LimeGreen = new Color("#32CD32");
    public static Linen = new Color("#FAF0E6");
    public static Magenta = new Color("#FF00FF");
    public static Maroon = new Color("#800000");
    public static MediumAquaMarine = new Color("#66CDAA");
    public static MediumBlue = new Color("#0000CD");
    public static MediumOrchid = new Color("#BA55D3");
    public static MediumPurple = new Color("#9370DB");
    public static MediumSeaGreen = new Color("#3CB371");
    public static MediumSlateBlue = new Color("#7B68EE");
    public static MediumSpringGreen = new Color("#00FA9A");
    public static MediumTurquoise = new Color("#48D1CC");
    public static MediumVioletRed = new Color("#C71585");
    public static MidnightBlue = new Color("#191970");
    public static MintCream = new Color("#F5FFFA");
    public static MistyRose = new Color("#FFE4E1");
    public static Moccasin = new Color("#FFE4B5");
    public static NavajoWhite = new Color("#FFDEAD");
    public static Navy = new Color("#000080");
    public static OldLace = new Color("#FDF5E6");
    public static Olive = new Color("#808000");
    public static OliveDrab = new Color("#6B8E23");
    public static Orange = new Color("#FFA500");
    public static OrangeRed = new Color("#FF4500");
    public static Orchid = new Color("#DA70D6");
    public static PaleGoldenRod = new Color("#EEE8AA");
    public static PaleGreen = new Color("#98FB98");
    public static PaleTurquoise = new Color("#AFEEEE");
    public static PaleVioletRed = new Color("#DB7093");
    public static PapayaWhip = new Color("#FFEFD5");
    public static PeachPuff = new Color("#FFDAB9");
    public static Peru = new Color("#CD853F");
    public static Pink = new Color("#FFC0CB");
    public static Plum = new Color("#DDA0DD");
    public static PowderBlue = new Color("#B0E0E6");
    public static Purple = new Color("#800080");
    public static RebeccaPurple = new Color("#663399");
    public static Red = new Color("#FF0000");
    public static RosyBrown = new Color("#BC8F8F");
    public static RoyalBlue = new Color("#4169E1");
    public static SaddleBrown = new Color("#8B4513");
    public static Salmon = new Color("#FA8072");
    public static SandyBrown = new Color("#F4A460");
    public static SeaGreen = new Color("#2E8B57");
    public static SeaShell = new Color("#FFF5EE");
    public static Sienna = new Color("#A0522D");
    public static Silver = new Color("#C0C0C0");
    public static SkyBlue = new Color("#87CEEB");
    public static SlateBlue = new Color("#6A5ACD");
    public static SlateGray = new Color("#708090");
    public static SlateGrey = new Color("#708090");
    public static Snow = new Color("#FFFAFA");
    public static SpringGreen = new Color("#00FF7F");
    public static SteelBlue = new Color("#4682B4");
    public static Tan = new Color("#D2B48C");
    public static Teal = new Color("#008080");
    public static Thistle = new Color("#D8BFD8");
    public static Tomato = new Color("#FF6347");
    public static Turquoise = new Color("#40E0D0");
    public static Violet = new Color("#EE82EE");
    public static Wheat = new Color("#F5DEB3");
    public static White = new Color("#FFFFFF");
    public static WhiteSmoke = new Color("#F5F5F5");
    public static Yellow = new Color("#FFFF00");
    public static YellowGreen = new Color("#9ACD32");

}