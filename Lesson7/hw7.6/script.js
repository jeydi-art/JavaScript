function Car(model, producer, year, maxSpeed, engineVolume) {

    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        for (const key in this) {
            // чтобы вывело только информацию о машине, без методов
            if (typeof this[key] !== 'function') {
                console.log(key, this[key]);
            }
        }
    };

    // метод: увеличить максимальную скорость
    this.increaseMaxSpeed = function (speedToAdd) {
        if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    };

    // метод: изменить год выпуска
    this.changeYear = function (year) {
        if (year > 1815) this.year = year;
    };

    // метод: добавить водителя
    this.addDriver = function (driver) {
        if (driver) this.driver = driver;
    };
}

const car = new Car('A6', 'Audi', 2015, 240, 2.5);
car.addDriver({name: 'John', age: 30});

// выводит в консоль строку їдемо зі швидкістю ... на годину
car.drive();

// меняем характеристики
car.increaseMaxSpeed(100);
car.changeYear(2000);

// смотрим актуальное состояние
car.info();
console.log(car);

// // ❗ ПЕРВЫЙ ВЫВОД — первичные данные
// console.log('=== INFO BEFORE CHANGES ===');
// car.info();   // ← здесь увидим 2015 и скорость 240
//
// // изменения
// car.increaseMaxSpeed(100); // скорость станет 340
// car.changeYear(2000);      // год станет 2000
//
// car.drive();
//
// // ❗ ВТОРОЙ ВЫВОД — обновлённые данные
// console.log('=== INFO AFTER CHANGES ===');
// car.info();   // ← здесь увидим 2000 и скорость 340