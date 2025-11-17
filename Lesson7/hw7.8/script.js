class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, slipperSize) {
        this.name = name;
        this.age = age;
        this.slipperSize = slipperSize;
    }
}

const cinderellas = [
    new Cinderella('Cinderella', 23, 36),
    new Cinderella('Cinderella2', 43, 16),
    new Cinderella('Cinderella3', 53, 18),
    new Cinderella('Cinderella4', 13, 12),
    new Cinderella('Cinderella5', 14, 18),
    new Cinderella('Cinderella6', 25, 38),
    new Cinderella('Cinderella7', 16, 40),
    new Cinderella('Cinderella8', 17, 30),
    new Cinderella('Cinderella9', 58, 19),
    new Cinderella('Cinderella10', 28, 20),

];

const prince = new Prince('Richard', 25, 36)

//с помощью цикла нахожу какая золушка должна быть с принцем
// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince.slipperSize) {
//     //     prince.wife = подходящая золушка
//         prince.wife = cinderella;
//     }
// }

//через .find() поиск золушки с 36 размером
prince.wife = cinderellas.find(
    cinderella => cinderella.footSize === prince.slipperSize
);

console.log(prince.wife);