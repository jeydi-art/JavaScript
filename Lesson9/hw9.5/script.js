//общий grid контейнер для карточек всех курсов
const coursesGrid = document.createElement('div');
coursesGrid.classList.add('courses-grid');
document.body.appendChild(coursesGrid);

//карточки курсов из массива coursesArray
for (const course of coursesArray) {

//создаю саму карточку (внешний блок)
const courseCard = document.createElement('div');
courseCard.classList.add('course-card');

// Поле title
const courseTitle = document.createElement('div');
courseTitle.classList.add('card-title');
courseTitle.textContent = `Course: ${course.title}`;

// Поле monthDuration
const courseMonths = document.createElement('div');
courseMonths.classList.add('course-month');
courseMonths.textContent = `Month duration: ${course.monthDuration}`;

// Поле hourDuration
const courseHours = document.createElement('div');
courseHours.classList.add('course-hour');
courseHours.textContent = `Hour duration: ${course.hourDuration}`;

// Контейнер для modules: заголовок и список ul с модулями
const courseModules = document.createElement('div');
courseModules.classList.add('course-modules');

// Заголовок
const modulesTitle = document.createElement('div');
modulesTitle.classList.add('modules-title');
modulesTitle.textContent = `Modules:`;

// Список
const modulesList = document.createElement('ul');
modulesList.classList.add('modules-list');

for (const moduleName of course.modules) {
    const li = document.createElement('li');
    li.textContent = moduleName;
    modulesList.appendChild(li);
}
    courseModules.append(modulesTitle, modulesList);

    courseCard.append(courseTitle, courseMonths, courseHours, courseModules);

    coursesGrid.appendChild(courseCard);
}



