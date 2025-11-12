// const coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// const map1 = coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter(value => value.monthDuration > 5)
//     .map((value, index) => {
//         value.id = index + 1;
//         return value;
//
//     });

//или короче через копи паста

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// const map1 = coursesAndDurationArray

    // чтобы не мутировать исходный массив, лучше добавить копию перед сортировкой вместо ^ строки
const map1 = [...coursesAndDurationArray] // создаём копию
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => ({...value, id: index + 1}));    // создаю новые объекты value и id в {}
console.log(map1);