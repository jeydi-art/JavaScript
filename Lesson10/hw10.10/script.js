//создаю массив из 100 объектов
const data = Array.from({length: 100}, (_, i) => ({
    id: i + 1,
    title: 'object',
    price: 100,
}));

//10 элементов на странице
const pageSize = 10;
let page = 0;

const content = document.getElementById('content');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Кнопка Prev
prevBtn.onclick = () => {
    if (page > 0) {
        page--;
        render();
    }
};

// Кнопка Next
nextBtn.onclick = () => {
    if ((page + 1) * pageSize < data.length) {
        page++;
        render();
    }

};

    function render() {
//очистка страницы (контейнера) перед выводом данных
        content.innerHTML = '';
        const start = page * pageSize;
//защита от ошибок (Math.min выбирает меньшее из двух чисел), вычисляю конец диапазона
        const end = Math.min(start + pageSize, data.length);


//----------------------------цикл вывода элементов на страницу
//         for (let i = start; i < end; i++) {
//
// //создание элемента <div> (внутри <div id="content"></div>)
//             const div = document.createElement('div');
//             const item = data[i];
//
// //вывожу и добавляю <div> в DOM
//             div.textContent = `${item.id} - ${item.title} - ${item.price}`;
//             content.appendChild(div);
//         }
//----------------------------или через деструктуризацию
        for (let i = start; i < end; i++) {
            const { id, title, price } = data[i];
            const div = document.createElement('div');

            div.textContent = `${id} - ${title} - ${price}`;
            content.appendChild(div);
        }


//управление кнопками
        prevBtn.disabled = page === 0;
        nextBtn.disabled = end >= data.length;
    }

//первый рендер страницы - показывает начальную (0) страницу
render();


