function fizzBuzz(max) {
    let fizzed = [];

    for (let i = 3; i < max; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
        }
        else if (i % 3 === 0 || i % 5 === 0) {
            fizzed.push(i);
        }
    }

    return fizzed;
}

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]