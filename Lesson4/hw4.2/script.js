function circleSquare(radius){
    let result = Math.PI * radius * radius;             //     или можно 3.14
    console.log(result);
    return result;              // return result.toFixed(2); // округляем до 2 знаков
}
circleSquare(7)