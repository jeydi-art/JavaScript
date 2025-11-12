const suits = ['spade', 'diamond', 'heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const cards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);

        // группирую карты по мастям
const grouped = cards.reduce((group, card) => {

        // на каждой итерации проверяется масть карты (cardSuit)
    switch (card.cardSuit) {

        // в зависимости от результата попадает в нужный массив:
        case 'spade':
            group.spades.push(card);
            break;
        case 'diamond':
            group.diamonds.push(card);
            break;
        case 'club':
            group.clubs.push(card);
            break;
        case 'heart':
            group.hearts.push(card);
            break;

    }
    return group;
},
    // InitialValue
    {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
});


console.log(grouped);