let s1 = "hello world";
const upper1 = s1.toUpperCase();
console.log(upper1);

let s2 = "lorem ipsum";
const upper2 = s2.toUpperCase();
console.log(upper2);

let s3 = "javascript is cool";
const upper3 = s3.toUpperCase();
console.log(upper3);

//.toUpperCase() не изменяет саму строку, а возвращает новую.
// Если нужно изменить исходную переменную:
//s1 = s1.toUpperCase();
//если записать результат обратно в ту же переменную (s1 = s1.toUpperCase()),
// то старая строка заменяется новой версией — полностью в верхнем регистре