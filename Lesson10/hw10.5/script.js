let sessionList = [];
//читает массив из localStorage
if (localStorage.getItem('sessionList')) {
    //если есть — превращает из строки в массив
    sessionList = JSON.parse(localStorage.getItem('sessionList'));
}
//добавляем текущую дату
sessionList.push(new Date());
//сохраняет обратно
localStorage.setItem('sessionList', JSON.stringify(sessionList));


//или короче
//let sessionList = JSON.parse(localStorage.getItem('sessionList')) || [];
//sessionList.push(new Date());
//localStorage.setItem('sessionList', JSON.stringify(sessionList));