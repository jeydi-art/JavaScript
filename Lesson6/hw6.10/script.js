const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const cards = [];       //пустой массив, сюда добавим все карты

for (const suit of suits) {             //внешний цикл, перебирает все масти suits
    for (const value of values) {       //внутренний цикл, перебирает значение value для каждой масти
        const card = {cardSuit: suit, value: value};        //формирую карту {cardSuit: suit, value: value}, добавляю цвет и ложу в массив cards
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);           //новая карта добавляется в массив cards
    }
}

console.log(cards);

// — найти пиковый туз (spade ace)
console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));

// — все шестерки
console.log(cards.filter(card => card.value === '6'));

// — все красные карты
console.log(cards.filter(card => card.color === 'red'));

// — все бубны
console.log(cards.filter(card => card.cardSuit === 'diamond'));

// — все трефы от 9
console.log(
    //беру все карты, у которых масть треф и значение содержится в списке ['9','10','jack','queen','king','ace']
    cards.filter(card =>
        card.cardSuit === 'clubs' && ['9','10','jack','queen','king','ace'].includes(card.value)
    )
);


//две проверки: .filter перебирает все карты массива и выбирает трефы; .includes(card.value) проверяет
// входит ли номинал карты в список разрешенных ['9','10','jack','queen','king','ace']
// cards.filter(card =>
//         card.cardSuit === 'clubs' && ['9','10','jack','queen','king','ace'].includes(card.value)