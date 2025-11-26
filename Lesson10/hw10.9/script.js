const currentTime = Date.now();
//цена из localStorage или, если там пусто, ставим первоначальное значение 100
let currentPrice = +localStorage.getItem('price') || 100;
let lastUpdateTime = +localStorage.getItem('lastUpdate');

// если if(время) больше 0, то выполняется второе условие
if (lastUpdateTime) {

    // проверяем, прошло ли 10 секунд
    if (currentTime - lastUpdateTime >= 10000) {
        currentNumber += 10;
    }
}

// сохраняем обновленную цену и текущее время
localStorage.setItem('price', currentPrice);
localStorage.setItem('lastUpdate', currentTime);

// выводим актуальную цену
document.getElementById('price').innerText = currentPrice + 'UAH';

// сбросить значения
document.getElementById('resetBtn').onclick = function () {
    localStorage.removeItem('price');
    localStorage.removeItem('lastUpdate');
    document.getElementById('price').innerText = '100UAH';
};
