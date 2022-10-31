function firstAndLast(array){

    // identify first and last values in array
    let firstNum = array [0];
    let lastNum = array[array.length-1];

    // check if function is odd or even
    if ( array.length % 2 != 0){    //is odd
        return firstNum - lastNum;  //Find difference
    }
    return firstNum + lastNum;      //is even, return sum
}

console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
console.log(firstAndLast([7, 11, 3]));      // 4