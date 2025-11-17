class Car {
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.driver = null;

    }

    // метод: едем
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

// метод: выводим информацию
    info() {
        for (const key in this) {
            // чтобы вывело только информацию о машине, без методов
            if (typeof this[key] !== 'function') {
                console.log(key, this[key]);
            }
        }
    }

    // метод: увеличить максимальную скорость
    increaseMaxSpeed(speedToAdd) {
        if (speedToAdd > 0) {
            this.maxSpeed = this.maxSpeed + speedToAdd;
        }
    }

    // метод: изменить год выпуска
    changeYear(newYear) {
        if (newYear > 1815) {
            this.year = newYear;
        }
    }

    // метод: добавить водителя
    addDriver(driver) {
        if (driver) {
            this.driver = driver;
        }
    }
}

const car = new Car('A6', 'Audi', 2015, 240, 2.5);
car.addDriver({name: 'John', age: 30});

// выводит в консоль строку їдемо зі швидкістю ... на годину
car.drive();

// смотрим актуальное состояние
car.info();

// меняем характеристики
car.increaseMaxSpeed(100);
car.changeYear(2000);

// смотрим актуальное состояние
console.log(car);
