// FILEPATH: /c:/myprojects/copilot-demo/src/tests/math.test.js

const { add, subtract, divide, multiply } = require('../utils/math.js');

describe('Math utility functions', () => {
    test('add() correctly adds two numbers', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(-1, 2)).toBe(1);
        expect(add(0, 0)).toBe(0);
    });

    test('subtract() correctly subtracts two numbers', () => {
        expect(subtract(2, 1)).toBe(1);
        expect(subtract(-1, 2)).toBe(-3);
        expect(subtract(0, 0)).toBe(0);
    });

    test('divide() correctly divides two numbers', () => {
        expect(divide(4, 2)).toBe(2);
        expect(divide(-4, 2)).toBe(-2);
        expect(() => divide(4, 0)).toThrow();
    });

    test('multiply() correctly multiplies two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-2, 3)).toBe(-6);
        expect(multiply(0, 3)).toBe(0);
    });
});