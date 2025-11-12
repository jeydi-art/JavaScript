console.log(coursesArray.filter(course => {
    return course.modules.includes('sass');
}));

console.log(coursesArray.filter(course => {
    return course.modules.includes('docker');
}));


//можно короче без return
// console.log(coursesArray.filter(course => course.modules.includes('sass')));
// console.log(coursesArray.filter(course => course.modules.includes('docker')));
