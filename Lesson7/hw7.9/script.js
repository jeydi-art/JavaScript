// myForEach

Array.prototype.myForEach = function(callback) {
    const todoArray = this;
    for (const item of todoArray) {
        callback(item);
    }
};

const tasks = [
    {title: 'Buy milk', done: false},
    {title: 'Clean room', done: true},
    {title: 'Do JavaScript homework', done: true},
]

tasks.myForEach(task => {
    console.log(`Task: ${task.title} - ${task.done ? '⭐' : '❌'}`);
})

//myFilter

Array.prototype.myFilter = function (predicate) {
    const arr = [];
    for (const item of this) {
        if (predicate(item)) {
            arr.push(item);
        }
    }
    return arr;
};

const products = [
    { name: 'Notebook', price: 30000, inStock: true },
    { name: 'Mouse', price: 500, inStock: true },
    { name: 'Keyboard', price: 1500, inStock: false },
    { name: 'Monitor', price: 12000, inStock: true },
    { name: 'Computer Chair', price: 200, inStock: false }
];

const availableProducts = products.myFilter(product => product.inStock);
console.log('Available products:', availableProducts);

const outOfStock = products.myFilter(product => !product.inStock);
console.log('Out of stock:', outOfStock);

const expensive = products.myFilter(product => product.price > 5000);
console.log('Expensive products:', expensive);