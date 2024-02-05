interface IHeading {
    stationName: string
    bgColor: string
}

function hexToHSL(hex: string): { h: number; s: number; l: number } {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex.substring(1, 3), 16);
        g = parseInt(hex.substring(3, 5), 16);
        b = parseInt(hex.substring(5, 7), 16);
    }

    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
}

function adjustLightness(hsl: { h: number; s: number; l: number }, amount: number): { h: number; s: number; l: number } {
    return { ...hsl, l: Math.min(100, Math.max(0, hsl.l + amount)) };
}


export function Heading({stationName, bgColor}: IHeading){

    const fgColor = (): string => {
        const bgHSL = hexToHSL(bgColor)
        if (bgHSL.l <= 50) {
            return "white"
        }else{
            return "black"
        }
    }

    return (
        <div className="heading" style={{backgroundColor: bgColor}}>
            <h2 style={{color: `${fgColor()}`}}>{stationName}</h2>
        </div>
    )
}