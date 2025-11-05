// ПЕРВЫЙ ВАРИАНТ! (лучше использовать второй)

// создаём функцию, которая принимает массив объектов
// function arrayMinValue(numbersArray) {
//
//     // создаём переменную min и берем с массива numbersArray его минимальное занчение - [0]
//     let min = 0;
//
//     // перебираем каждое число массива отдельно
//     for (const number of numbersArray) {
//         if (number < min) {
//             min = number;
//         }
//     }
//     return min;
//
// }
// console.log(arrayMinValue([-6227, 99, -123, 56, 67]));

// ВТОРОЙ ВАРИАНТ

// функция принимает массив чисел в параметре numbersArray
function arrayMinValue(numbersArray) {

    // создаём переменную min и временно считаем,
    // что минимальное число — это первый элемент массива
    let min = numbersArray[0];

    // цикл for...of перебирает все элементы массива
    for (const number of numbersArray) {

        // если найденное число меньше текущего min,
        // то оно становится новым минимальным значением
        if (number < min) {
            min = number;
        }
    }
    // после завершения цикла функция возвращает найденное минимальное число
    return min;
}
console.log(arrayMinValue([-6227, 99, -123, 56, 67]));


// Функция для поиска максимального значения:
// function arrayMaxValue(numbersArray) {
//     let max = numbersArray[0];
//     for (const number of numbersArray) {
//         if (number > max) {
//             max = number;
//         }
//     }
//     return max;
// }
//
// console.log(arrayMaxValue([-6227, 99, -123, 56, 67]));

