// первый вариант

// function foobar(text) {
//     let p = `<p>Lorem Ipsum</p>`;
//     document.write(p);
// }
// foobar();

// второй вариант
function foobar(text) {
    document.write(`<p>${text}</p>`);
}

foobar('Lorem Ipsum Lorem Ipsum Lorem, sit amet');