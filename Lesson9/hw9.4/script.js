let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//первый вариант
// for (const course of coursesAndDurationArray) {
//     const courseDiv = document.createElement('div');
//     const h2 = document.createElement('h2');
//     h2.textContent = course.title;
//     const p = document.createElement('p');
//     p.textContent = course.monthDuration;
//
//     courseDiv.append(h2, p);
//
//     document.body.appendChild(courseDiv);
// }

//второй вариант

for (const course of coursesAndDurationArray) {

    const courseDiv = document.createElement('div');
    courseDiv.classList.add('item');

    const h2 = document.createElement('h2');
    h2.classList.add('heading');
    h2.textContent = course.title;

    const p = document.createElement('p');
    p.classList.add('description');
    p.textContent = course.monthDuration;

    courseDiv.append(h2, p);

    document.body.appendChild(courseDiv);
}