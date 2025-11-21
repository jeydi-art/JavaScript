const ul = document.createElement('ul');
const menuItems = ['Main', 'Products', 'About Us', 'Contacts'];

for  (let i=0; i < menuItems.length; i++) {
    const li = document.createElement('li');
    li.textContent = menuItems[i];
    ul.appendChild(li);
}
document.body.appendChild(ul);



// второй вариант
// const ul = document.createElement('ul');
// const items = ['Main', 'Products', 'About Us', 'Contacts'];
// for  (let i=0; i < items.length; i++) {
//     const li = document.createElement('li');
//     li.textContent = items[i];
//     ul.appendChild(li);
// }
// document.body.appendChild(ul);
