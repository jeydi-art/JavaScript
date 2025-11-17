
function Client(id, name, surname, email, phone, order) {

    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}


let clients = [];

clients.push(
    new Client(1, 'John', 'Doe', 'john@gmail.com', '+380111111111', ['bread', 'milk']),
    new Client(2, 'Anna', 'Smith', 'anna@gmail.com', '+380222222222', ['socks']),
    new Client(3, 'Mark', 'Stone', 'mark@gmail.com', '+380333333333', ['laptop', 'mouse', 'keyboard']),
    new Client(4, 'Eva', 'Brown', 'eva@gmail.com', '+380444444444', ['chocolate']),
    new Client(5, 'Tom', 'Ford', 'tom@gmail.com', '+380555555555', ['book', 'pen']),
    new Client(6, 'Sarah', 'Green', 'sarah@gmail.com', '+380666666666', ['notebook']),
    new Client(7, 'Max', 'Ray', 'max@gmail.com', '+380777777777', ['monitor', 'cable']),
    new Client(8, 'Donna', 'Stone', 'donna@gmail.com', '+380888888888', ['cookies']),
    new Client(9, 'Kira', 'Black', 'kira@gmail.com', '+380999999999', ['tea', 'sugar']),
    new Client(10, 'Jane', 'White', 'jane@gmail.com', '+380101010101', ['t-shirt', 'jeans'])
);

console.log(clients);
