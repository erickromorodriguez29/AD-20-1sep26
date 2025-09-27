const calculator = require('./calculator');

describe('Addition Tests', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    test('adds -4 + 8 to equal 4', () => {
        expect(calculator.add(-4, 8)).toBe(4);
    });
});

describe('Subtraction Tests', () => {
    test('subtract 5 - 4 to equal 1', () => {
        expect(calculator.subtract(5, 4)).toBe(1);
    });

    test('subtract -5 - -10 to equal 5', () => {
        expect(calculator.subtract(-5, -10)).toBe(5);
    });
});

describe('Multiply Tests', () => {
    test('multiply 3 * 4 should return 12', () => {
        expect(calculator.multiply(3, 4)).toBe(12);
    });

    test('multiply 5 * 0 should return 0', () => {
        expect(calculator.multiply(5, 0)).toBe(0);
    });
});

describe('Divide Tests', () => {
    test('divide 10 / 2 should return 5', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });

    test('divide by zero should throw error', () => {
        expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });
});
