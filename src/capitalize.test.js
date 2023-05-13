const capitalize = require('./capitalize');

test('capitalize the first leter of a string', () => {
    expect(capitalize("dragon")).toBe("Dragon");
});

test('what if first letter is already capitalized', () => {
    expect(capitalize("Car")).toBe("Car");
});

test('what with a sentence', () => {
    expect(capitalize("the cat is brown")).toBe("The cat is brown");
});