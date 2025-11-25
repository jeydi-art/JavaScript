let currentNumber = +localStorage.getItem('number');
//увеличиваю число
currentNumber += 1;
//сохраняю обратно
localStorage.setItem('number', currentNumber);
//вывод
document.getElementById('target').innerText = currentNumber;