const caesarCipher = require('./caesarCipher');

test('Simple shift', () => {
    expect(caesarCipher(1,'bee')).toBe('cff');
});

test('Wrapping working', () => {
    expect(caesarCipher(27,'cat')).toBe('dbu');
});

test('Working with spaces', () => {
    expect(caesarCipher(5,'god lord')).toBe('lti qtwi');
});

test('Working with numbers', () => {
    expect(caesarCipher(3,'magical numbers:5')).toBe('pdjlfdo qxpehuv:5');
});

