function fizzBuzz(max) {
    numbers = [];
    for (i = 3; i < max; i++) {
        if (i % 15 === 0) {

        }
        else if (i % 3 === 0 || i % 5 === 0){
            numbers.push(i);
        }
    }
    return numbers;
}

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]