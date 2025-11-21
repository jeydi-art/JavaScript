const arr = ['Main', 'Products', 'About Us', 'Contacts'];
const menu = document.createElement('ul');
menu.classList.add('menu');

for (const item of arr) {
    const li = document.createElement('li');
    li.textContent = item;
    menu.appendChild(li);
}
document.body.appendChild(menu);



//второй вариант (если нужна нумерация)

// const menu = document.createElement('ul');
// const menuItems = ['Main', 'Products', 'About Us', 'Contacts'];
//
// for  (let i=0; i < menuItems.length; i++) {
//     const li = document.createElement('li');
//     li.textContent = menuItems[i];
//     menu.appendChild(li);
// }
// document.body.appendChild(menu);
