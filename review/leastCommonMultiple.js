function leastCommonMultiple(num1, num2) {
    for (let i = num1; num1 < Infinity; i += num1) {
        if(i % num2 === 0) {
            return i;
        }
    }
}



console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10