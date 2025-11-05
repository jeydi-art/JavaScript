
// создаём функцию, которая принимает один аргумент — массив (array)

function foobar(array) {
    // открываем список <ul> (начало списка)
    document.write('<ul>')

    // перебираем все элементы массива (числа, строки, булевы значения)
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }

    // закрываем список
    document.write('</ul>');
}
foobar([42, 'hello', true, 0]);