function addToLocalStorage(arrayName, objToAdd) {
    const localstorageItem = localStorage.getItem(arrayName);
    //Проверяем, существует ли массив
    if (!localstorageItem) {
        throw new Error('There is no such array');
    }

    const array = JSON.parse(localstorageItem);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
//функция сохраняет обновлённый массив обратно в localStorage
    localStorage.setItem(arrayName, JSON.stringify(array));
}
//создаем массив в ручную
localStorage.setItem('myArray', JSON.stringify([334, 34, 56, 'assd', true]));
//для теста к массиву myArray добавляем пустой объект {} (если {} вывелись, то все работает)
addToLocalStorage('myArray', {});
