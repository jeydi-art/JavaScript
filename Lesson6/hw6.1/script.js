let s1 = "Hello World";
// console.log(s1.length);
let s2 = "Lorem Ipsum";
// console.log(s2.length);
let s3 = "JavaScript is cool";
// console.log(s3.length);

//или сокращённая версия через массив

const strings = [s1, s2, s3];
for (const s of strings) {
    console.log(s.length);
}
