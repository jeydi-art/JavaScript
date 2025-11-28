//ищу контейнер, в который буду добавлять все корзины
const cartsDiv = document.getElementById('carts');

fetch('https://dummyjson.com/carts')
.then(value => value.json())
.then(cartsObject => {
    const {carts} = cartsObject;


//итерацией для каждой корзины создаю внешний контейнер div.cart-container
for (const cart of carts) {
//создаю карточку корзины
    const div = document.createElement('div');
    div.classList.add('cart-container');

//вывожу основные поля корзины
    const divWithInfo = document.createElement('div');
    divWithInfo.innerText = `
        total: ${cart.total}
        discountedTotal: ${cart.discountedTotal}
        userId: ${cart.userId}
        totalProducts: ${cart.totalProducts}
        totalQuantity: ${cart.totalQuantity}
        `;


//товары корзины: создаю нумерованный список
    const ol = document.createElement('ol');
    ol.classList.add('cart-products');

//для каждого продукта (product) создаю li и p
    for (const product of cart.products) {
        const li = document.createElement('li');

        const info = document.createElement('p');
        info.innerText = `
        id: ${product.id}
        title: ${product.title}
        price: ${product.price}
        quantity: ${product.quantity}
        total: ${product.total}
        discountPercentage: ${product.discountPercentage}
        discountedTotal: ${product.discountedTotal}
        `;

//вставляю картинку товара
        const img = document.createElement('img');
        img.src = product.thumbnail;
        img.alt = product.title;

//вставляю img и info внутрь li
        li.append(img, info);

//li добавляю в ol
        ol.appendChild(li);
    }

//добавляю список товаров и общую информацию корзины (ol) добавляю в контейнер div, и весь div — в #carts
    div.append(divWithInfo, ol);
    cartsDiv.appendChild(div);
}
});