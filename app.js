let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
console.log(fromEuroToDollar(1));

const fromDollarToYen = function(valueInDollar) {    
    let valueInYen = valueInDollar * 156.5 / 1.07;
    return valueInYen;
}
console.log(fromDollarToYen(1));

const fromYentoPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.87 / 156.5;
    return valueInPound;
}
console.log(fromYentoPound(1));

module.exports = { fromEuroToDollar, fromDollarToYen, fromYentoPound }

