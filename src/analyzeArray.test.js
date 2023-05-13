const analyzeArray = require('./analyzeArray');

test("Analyzes the array correctly", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        length: 6,
        average: 4,
        min: 1,
        max: 8,
    });
});