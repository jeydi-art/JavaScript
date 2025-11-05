function foobar(text, counter) {
    // открываем список <ul> (начало списка)
    document.write('<ul>')

    // цикл повторяется counter раз.
    for (let i=0; i < counter; i++) {

        // На каждой итерации выводится один <li> с текстом из аргумента text.
        document.write(`<li>${text}</li>`);
}
    // закрываем список
    document.write('</ul>');
}
foobar('Lorem Ipsum Lorem Ipsum Lorem, sit amet', 100);