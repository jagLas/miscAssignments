function fibonacciSequence(num) {
    if (typeof num !== 'number') {
        throw 'Not a Number'
    }

    let sequence = [];

    if (num <=2 ){
        for (let i = 0; i <num; i++) {
            sequence.push(1);
        } 
    }
        else {
            sequence = [1,1];
        }

    for (let i = 1; i < num - 1; i++) {
        num1 = sequence[i];
        num0 = sequence[i-1];
        // console.log(num1, num0)

        sequence.push(num1+num0);
    }

    return sequence;
}


console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]