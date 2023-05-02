const {Square, Triangle, Circle} = require('./shapes.js')

describe('Shape testing', () => {
    describe('Is it a square?', () => {
        it('should be true if the shape is a square', () => {
            const shape = new Square('OOP', 'red', 'blue');
            expect(shape.generateSVG()).toEqual(`
            <svg width="300" height="200">
                <rect width="200" height="200" style="fill:blue"/>
                <text fill="red" font-size="70" font-family="Verdana" x="20" y="100">OOP</text>
            </svg>
            `);
        });
    });
    describe('Is it a triangle?', () => {
        it('should be true if the shape is a triangle', () => {
            const shape = new Triangle('OOP', 'red', 'blue');
            expect(shape.generateSVG()).toEqual('<polygon points="150, 18 244, 182 56, 182" style="fill:blue"/>');
        });
    });
    describe('Is it a circle?', () => {
        it('should be true if the shape is a circle', () => {
            // Arrange
            const shape = new Triangle('OOP', 'red', 'blue');
            // Act
            // const result = ;
            // Assert
            expect(shape.generateSVG()).toEqual('<circle cx="100" cy="100" r="100" style="fill:blue"/>');
        });
    });
});
