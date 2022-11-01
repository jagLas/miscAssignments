function summationSequence(start, length) {
    let summation = [start];

    for (let i = 1; i < length; i++) {
        let num = summation[i-1];

        summation.push(summate(num));
    }

    return summation;
}

function summate(num) {
    let sum = 0;
    for (let i = num; i > 0; i--) {
        sum += i;
    }

    return sum;
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]