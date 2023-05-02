class Square {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    };
    generateSVG() {return `
    <svg width="300" height="200">
        <rect width="200" height="200" style="fill:${this.shapeColor}"/>
        <text fill="${this.textColor}" font-size="70" font-family="Verdana" x="20" y="100">${this.text}</text>
    </svg>
    `};
};

class Triangle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    };
    generateSVG() {return ` 
    <svg width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" style="fill:${this.shapeColor}"/>
        <text fill="${this.textColor}" font-size="50" font-family="Verdana" x="95" y="150">${this.text}</text>
    </svg>
    `};
};

class Circle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    };
    generateSVG() {return `
    <svg width="300" height="200">
        <circle cx="100" cy="100" r="100" style="fill:${this.shapeColor}"/>
        <text fill="${this.textColor}" font-size="50" font-family="Verdana" x="20" y="125">${this.text}</text>
    </svg>
    `};
};

module.exports = {
    Square,
    Triangle,
    Circle
}
