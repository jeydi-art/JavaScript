const exchange = (sumUAH, currencyValues, exchangeCurrency) => {

    // создаю переменную, куда потом запишу найденный объект с нужной валютой
    let chosenCurrency;

    // если значение поля currency совпадает с валютой, которую нужно найти (exchangeCurrency),
    // то этот объект сохраняется в chosenCurrency
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }

    }
let result = sumUAH / chosenCurrency.value;
    return result;
}
console.log(exchange(
    10000,
    [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}],
    'USD'));

