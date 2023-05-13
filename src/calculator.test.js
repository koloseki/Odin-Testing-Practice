const calculator = require('./calculator');

test('simple add', () => {
    expect(calculator.add(5,5)).toBe(10);
});

test('adding fractions', () => {
    expect(calculator.add(0.2,0.2)).toBe(0.4);
});

test('simple subtract', () => {
    expect(calculator.subtract(50,40)).toBe(10);
});

test('simple multiply', () => {
    expect(calculator.multiply(7,7)).toBe(49);
});

test('simple divide', () => {
    expect(calculator.divide(100,5)).toBe(20);
});

test('Not a numbers', () => {
    expect(calculator.divide("Astrology",'5')).toBe("Valid Arguments, check if they are numbers");
});


