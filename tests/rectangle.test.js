const {getRectanglePerimeter, getRectangleArea, getRectangleInfo} = require('../js/rectangle.js');

test('should properly count rectangle perimeter', () => {
    const output = getRectanglePerimeter(3,4);
    expect(output).toBe(14);
});

test('should properly count rectangle area', () => {
    const output = getRectangleArea(3,4);
    expect(output).toBe(12);
});

test('should properly return info message', () => {
    console.log = function(){
        let consoleOutput = Array.from(arguments)[0]; // ES5
        expect(consoleOutput).toEqual("The perimeter of a rectangle is 14 and the area is 12");
    }
    getRectangleInfo(3,4);
});
