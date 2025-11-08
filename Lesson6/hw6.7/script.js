let nums = [11, 21, 3];

function sortNums(arrayOfNums, direction) {
    if (direction === 'ascending') return arrayOfNums.sort((a, b) => a - b);
    if (direction === 'descending') return arrayOfNums.sort((a, b) => b - a);

}
console.log(sortNums(nums, 'ascending'));   // [3, 11, 21]
console.log(sortNums(nums, 'descending'));  // [21, 11, 3]


// console.log(sortNums([11, 21, 3],'ascending'));