//ищу контейнер, в который буду добавлять все рецепты
const recipesDiv = document.getElementById('recipes');

fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(dataObject => {
        const {recipes} = dataObject;


//итерацией перебираю массив рецептов
        for (const recipe of recipes) {
//создаю карточку рецепта
            const card = document.createElement('div');
            card.classList.add('recipe-card');

// создаю ID и заголовок рецепта
            const title = document.createElement('h2');
            title.innerText = `${recipe.id}. ${recipe.name}`;
            card.appendChild(title);

// создаю список ингредиентов ul и li
            const ingredientsListTitle = document.createElement('h3');
            ingredientsListTitle.innerText = 'Ingredients:';
            card.appendChild(ingredientsListTitle);

            const ul = document.createElement('ul');
            ul.classList.add('ingredients-list');

// наполняю список
            for (const ingredient of recipe.ingredients) {
                const li = document.createElement('li');
                li.innerText = ingredient;
                ul.appendChild(li);
            }

//добавляю название списка ингредиентов в карточку
            card.appendChild(ul);

//инструкция
            const instructionTitle = document.createElement('h3');
            instructionTitle.innerText = 'Instructions:';
            card.appendChild(instructionTitle);

            for (const step of recipe.instructions) {
                const instructionLine = document.createElement('p');
                instructionLine.innerText = step;
                card.appendChild(instructionLine);
            }

// создаю блок с основной информацией
            const info = document.createElement('p');
            info.innerText =
                `Preparation time: ${recipe.prepTimeMinutes} min
Cook time: ${recipe.cookTimeMinutes} min
Servings: ${recipe.servings}
Difficulty: ${recipe.difficulty}
Cuisine: ${recipe.cuisine}
Calories per serving: ${recipe.caloriesPerServing}`;
            card.appendChild(info);

// добавляю теги
            const {tags} = recipe;

            let tagsText = 'Tags: ';
//объявляю переменную index -> присваиваю ей 0 (для обработки тегов, последний или нет)
            let index = 0;

            for (const tag of tags) {
                tagsText = tagsText + tag;
//проверка: если последний индекс, то запятую не ставим
                if (index < tags.length - 1) {
                    tagsText = tagsText + ', ';
                }
//увеличиваем значение счётчика на 1 после каждой итерации, чтобы понимать последний это тег или нет
                index++;
            }
            const tagsP = document.createElement('p');
            tagsP.innerText = tagsText;
            card.appendChild(tagsP);

//фото еды
            const img = document.createElement('img');
            img.src = recipe.image;
            img.alt = recipe.name;
            card.appendChild(img);

//инфо2
            const info2 = document.createElement('p');
            info2.innerText =
                `User id: ${recipe.userId}
Rating: ${recipe.rating}
Review count: ${recipe.reviewCount}`;
            card.appendChild(info2);


            const {mealType} = recipe;
            let mealTitle = 'Meal type: ';
            let mealIndex = 0;

            for (const meal of mealType) {
                mealTitle = mealTitle + meal;
                if (mealIndex < mealType.length - 1) {
                    mealTitle = mealTitle + ', ';
                }
                mealIndex++;
            }
            const mealTypeP = document.createElement('p');
            mealTypeP.innerText = mealTitle;
            card.appendChild(mealTypeP);

// добавляю карточку в общий контейнер
            recipesDiv.appendChild(card);
        }
    });


//или все appendChild добавлены через append

////ищу контейнер, в который буду добавлять все рецепты
// const recipesDiv = document.getElementById('recipes');
//
// fetch('https://dummyjson.com/recipes')
//     .then(response => response.json())
//     .then(dataObject => {
//         const {recipes} = dataObject;
//
//         // итерацией перебираю массив рецептов
//         for (const recipe of recipes) {
//
//             //создаю карточку рецепта
//             const card = document.createElement('div');
//             card.classList.add('recipe-card');
//
//             //  ID + заголовок
//             const title = document.createElement('h2');
//             title.innerText = `${recipe.id}. ${recipe.name}`;
//
//             //  Ingredients (список)
//             const ingredientsListTitle = document.createElement('h3');
//             ingredientsListTitle.innerText = 'Ingredients:';
//
//             const ul = document.createElement('ul');
//             ul.classList.add('ingredients-list');
//
//             for (const ingredient of recipe.ingredients) {
//                 const li = document.createElement('li');
//                 li.innerText = ingredient;
//                 ul.appendChild(li);
//             }
//
//             //  Instructions (каждый шаг — отдельный p)
//             const instructionTitle = document.createElement('h3');
//             instructionTitle.innerText = 'Instructions:';
//
//             const instructionLines = [];
//             for (const step of recipe.instructions) {
//                 const instructionLine = document.createElement('p');
//                 instructionLine.innerText = step;
//                 instructionLines.push(instructionLine);
//             }
//
//             // Блок с основной информацией
//             const info = document.createElement('p');
//             info.innerText =
//                 `Preparation time: ${recipe.prepTimeMinutes} min
// Cook time: ${recipe.cookTimeMinutes} min
// Servings: ${recipe.servings}
// Difficulty: ${recipe.difficulty}
// Cuisine: ${recipe.cuisine}
// Calories per serving: ${recipe.caloriesPerServing}`;
//
//
//             //  Tags
//             const {tags} = recipe;
//             let tagsText = 'Tags: ';
//             let index = 0;
//
//             for (const tag of tags) {
//                 tagsText = tagsText + tag;
//                 if (index < tags.length - 1) {
//                     tagsText = tagsText + ', ';
//                 }
//                 index++;
//             }
//
//             const tagsP = document.createElement('p');
//             tagsP.innerText = tagsText;
//
//             //  Картинка
//             const img = document.createElement('img');
//             img.src = recipe.image;
//             img.alt = recipe.name;
//
//             //  Доп. информация
//             const info2 = document.createElement('p');
//             info2.innerText =
//                 `User id: ${recipe.userId}
// Rating: ${recipe.rating}
// Review count: ${recipe.reviewCount}`;
//
//
//             //  Meal Type
//             const {mealType} = recipe;
//             let mealTitle = 'Meal type: ';
//             let mealIndex = 0;
//
//             for (const meal of mealType) {
//                 mealTitle = mealTitle + meal;
//                 if (mealIndex < mealType.length - 1) {
//                     mealTitle = mealTitle + ', ';
//                 }
//                 mealIndex++;
//             }
//
//             const mealTypeP = document.createElement('p');
//             mealTypeP.innerText = mealTitle;
//
//
//             //      ОДИН APPEND СПИСКОМ
//
//             card.append(
//                 title,
//                 ingredientsListTitle,
//                 ul,
//                 instructionTitle,
//                 ...instructionLines,
//                 info,
//                 tagsP,
//                 img,
//                 info2,
//                 mealTypeP
//             );
//
//             // добавляю карточку в общий контейнер
//             recipesDiv.appendChild(card);
//         }
//     });