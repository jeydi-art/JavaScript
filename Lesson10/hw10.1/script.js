//поиск если кнопка с id
// const button = document.getElementById('btn');

//поиск по TagName если кнопка без id
// document.getElementsByTagName('button')[0];

//или
const buttons = document.getElementsByTagName('button');
const button = buttons[0];

// button.onclick = function () {
    //удаление текста, текст нельзя вернуть (первый вариант)
    // document.getElementById('text').remove();
    //второй вариант, текст сжимается, но не исчезает полностью (не рекоменд)
    // document.getElementById('text').style.height = 0;
    //третий вариант (самый лучший)
    // document.getElementById('text').style.display = 'none';
// }

//или через addEventListener

button.addEventListener('click', () => {
    document.getElementById('text').style.display = 'none';
})

//или короче, не вызываю getElementById каждый раз:
// const button = document.getElementsByTagName('button')[0];
// const text = document.getElementById('text');
//
// button.addEventListener('click', () => {
//     text.style.display = 'none';
// });
