let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
};
const fromDollarToYen = dollars => (dollars / oneEuroIs["USD"]) * oneEuroIs["JPY"];
const fromEuroToDollar = euros => euros * oneEuroIs["USD"];
const fromYenToPound = yen => (yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};