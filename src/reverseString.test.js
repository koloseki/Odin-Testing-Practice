const reverseString = require('./reverseString');

test('reversing a word', () => {
    expect(reverseString("dog")).toBe("god");
});

test('with numbers and symbols', () => {
    expect(reverseString("Cat:0")).toBe("0:taC");
});

test('with a sentence', () => {
    expect(reverseString("what the dog doing")).toBe("gniod god eht tahw");
});