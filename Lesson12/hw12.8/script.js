const usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

const citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
    // С помощью map собираем новый массив newUsersArr
const newUsersArr = usersWithId.map(user => {

    // Находим город пользователя через filter
    const filteredCities = citiesWithId.filter(city => {
        return city.user_id === user.id;
    });

    // Из массива берём первый найденный город
    const city = filteredCities[0];

    // Создаём новый объединённый объект
    return {
        ...user, // разворачиваем пользователя
        address: {
            ...city // разворачиваем город
        }
    };
});

console.log(newUsersArr);


//или

// const usersWithCities = [];
//
// for (let i = 0; i < usersWithId.length; i++) {
//     const user = usersWithId[i];
//
//     for (let j = 0; j < citiesWithId.length; j++) {
//         const city = citiesWithId[j];
//
//         if (user.id === city.user_id) {
//             const newUser = {
//                 id: user.id,
//                 name: user.name,
//                 age: user.age,
//                 status: user.status,
//                 address: {
//                     country: city.country,
//                     city: city.city
//                 }
//             };
//
//             usersWithCities.push(newUser);
//         }
//     }
// }
//
// console.log(usersWithCities);

