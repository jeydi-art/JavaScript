const userForm = document.forms['userForm'];

const target = document.getElementById('target');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = userForm.name.value;
    const surnameValue = userForm.surname.value;
    const ageValue = +userForm.age.value;
    //создаю новый объект obj и сохраняю в него значения полей формы
    let obj = {nameValue, surnameValue, ageValue}
    //или создаю новый объект user и сохраняю в него значения полей формы
    //let user = {
    //     name: userForm.name.value,
    //     surname: userForm.surname.value,
    //     age: +userForm.age.value
    // };
    // console.log(user);
    console.log(obj);
    target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
    //или лучше
    //target.innerText = `${obj.nameValue} ${obj.surnameValue} ${obj.ageValue}`;
});