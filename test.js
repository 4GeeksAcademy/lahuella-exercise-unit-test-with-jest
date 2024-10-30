test("10 euros should be 10.7 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const euros = 10;
    const expectedDollars = euros * 1.07;
    expect(fromEuroToDollar(euros)).toBe(expectedDollars, 2);
})
test("Convert 10 dollars to Yen", () => {
    const { fromDollarToYen } = require('./app.js');
    const dollars = 10;
    const expectedYen = (dollars / 1.07) * 156.5;
    expect(fromDollarToYen(dollars)).toBe(expectedYen, 2);
});
test("Converts 1000 yen to pounds", () => {
    const { fromYenToPound } = require('./app.js');
    const yen = 1000;
    const expectedPounds = (yen / 156.5) * 0.87;
    expect(fromYenToPound(yen)).toBe(expectedPounds, 2);
});