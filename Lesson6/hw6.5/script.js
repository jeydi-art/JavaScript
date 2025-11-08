function stringToArray(str) {
    if (str) {                  // проверяем, есть ли вообще строка
        const split = str.split(' ');
return split;
    }
    return [''];        // если строки нет — возвращаем массив с пустым элементом
}

console.log(stringToArray('Ревуть воли як ясла повні'));
