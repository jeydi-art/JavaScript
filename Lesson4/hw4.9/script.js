
// создаём функцию, которая принимает массив объектов — id, name, age

function foobar(usersArray) {
    for (const user of usersArray) {

        // Каждый объект оформляется как отдельный блок <div>
        document.write(`
    <div>
        id: ${user.id},
        name: ${user.name},
        age: ${user.age}
    </div>
                        `);
    }

}
foobar([
    {id: 1, name: 'Anja', age: 25},
    {id: 2, name: 'Maks', age: 30},
    {id: 3, name: 'Kira', age: 22},
    {id: 4, name: 'Philip', age: 28}
]);