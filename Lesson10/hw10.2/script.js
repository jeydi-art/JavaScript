const ageInput = document.getElementById('ageInput');
const checkBtn = document.getElementById('checkBtn');
const result = document.getElementById('result');

// Вешаю обработчик на кнопку
checkBtn.addEventListener('click', () => {
//считываю возраст, переведя string в number
    const age = Number(ageInput.value);

//проверка на корректность ввода возраста, если не число больше 0, то выведет ошибку
    if (!age) {
        result.textContent = 'Please enter a number';
        return;
    }
//проверка возраста
    if (age < 18) {
        result.textContent = 'You are under 18. Access denied';
    } else {
        result.textContent = 'You are 18 or older. Access granted';
    }

});