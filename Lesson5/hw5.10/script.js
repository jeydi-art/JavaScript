//
// function arrayMinValue(numbersArray) {
//
//     // создаём переменную min и временно считаем,
//     // что минимальное число — это первый элемент массива
//     let min = numbersArray[0];
//
//     // цикл for...of перебирает все элементы массива
//     for (const number of numbersArray) {
//
//         // если найденное число меньше текущего min,
//         // то оно становится новым минимальным значением
//         if (number < min) {
//             min = number;
//         }
//     }
//     // после завершения цикла функция возвращает найденное минимальное число
//     return min;
// }
// console.log(arrayMinValue([-6227, 99, -123, 56, 67]));

const arrayMinValue = (numbersArray) => {
    let min = numbersArray[0];
    for (const number of numbersArray) {
        if (number < min) {
            min = number;
        }
    }

    return min;

};
    console.log(arrayMinValue([-6227, 99, -123, 56, 67]));




