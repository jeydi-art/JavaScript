function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// let users = [
//     new User(1, 'John', 'Doe', 'Doe@gmao.com', '+382456345'),
//     new User(2, 'Mark', 'Stain', 'stain@gmail.com', '+38245443345' ),
//     new User(3, 'Klark', 'Jame', 'jame@gmail.com', '+382400345'),
//     new User(4, 'Stain', 'Danis', 'danis@gmail.com', '+3824556345'),
//     new User(5,'Anna', 'Sunny', 'sunny@gmail.com', '+3822222345'),
//     new User(6,'Eva', 'Teddy', 'teddy@gmail.com', '+3822222345'),
//     new User(7,'Max', 'Red', 'red@gmail.com', '+3666622345'),
//     new User(8,'Donna', 'Stue', 'stue@gmail.com', '+3546644345'),
//     new User(9,'Kira', 'Danna', 'danna@gmail.com', '+3865432345'),
//     new User(10,'Jane', 'Ostin', 'ostin@gmail.com', '+355522345'),
// ]

//делаем как в задании:

// Создаём пустой массив
let users = [];

// Наполняем массив 10 объектами
users.push(
    new User(1, 'John', 'Doe', 'Doe@gmao.com', '+382456345'),
    new User(2, 'Mark', 'Stain', 'stain@gmail.com', '+38245443345'),
    new User(3, 'Klark', 'Jame', 'jame@gmail.com', '+382400345'),
    new User(4, 'Stain', 'Danis', 'danis@gmail.com', '+3824556345'),
    new User(5, 'Anna', 'Sunny', 'sunny@gmail.com', '+3822222345'),
    new User(6, 'Eva', 'Teddy', 'teddy@gmail.com', '+3822222345'),
    new User(7, 'Max', 'Red', 'red@gmail.com', '+3666622345'),
    new User(8, 'Donna', 'Stue', 'stue@gmail.com', '+3546644345'),
    new User(9, 'Kira', 'Danna', 'danna@gmail.com', '+3865432345'),
    new User(10, 'Jane', 'Ostin', 'ostin@gmail.com', '+355522345')
);

console.log(users);