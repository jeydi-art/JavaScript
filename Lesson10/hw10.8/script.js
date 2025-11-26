// элемент <table> — сюда будем добавлять строки <tr> и ячейки <td>
const table = document.getElementById('table');

const tableGeneratorForm = document.forms['tableGeneratorForm'];

tableGeneratorForm.onsubmit = function (e) {
    //для обновления таблицы
    table.innerText = '';
    //чтобы страница не перезагружалась
    e.preventDefault();


    const linesValue = +tableGeneratorForm.lines.value;
    const cellsValue = +tableGeneratorForm.cells.value;
    const dataValue = tableGeneratorForm.data.value;
    //проверка
    // console.log(linesValue, cellsValue, dataValue);

    //Цикл создания строк <tr>. Каждая итерация → новая строка таблицы.
    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr');

    //Цикл создания ячеек в строке: создаёт <td>, вставляет в него текст, добавляет <td> в <tr>
        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement('td');
            td.innerText = dataValue;
    //appendChild добавляет <td> внутрь <tr>
            tr.appendChild(td);
        }
    //добавляем строку в таблицу, После этого строка появляется на странице (html)
        table.appendChild(tr);

    }
};