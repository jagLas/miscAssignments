function commonFactors(num1, num2) {
    let factors1 = factorsOf(num1);
    let factors2 = factorsOf(num2);
    let commonFactors = [];

    for (let i = 0; i < factors1.length; i++) {
        let num = factors1[i];
        if(factors2.includes(num)){
            commonFactors.push(num);
        }
    }
    
    return commonFactors;
}

let factorsOf = function(num) {
    let factors = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
console.log(commonFactors(8, 4));              // [1, 2, 4]
console.log(commonFactors(4, 8));              // [1, 2, 4]
console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
console.log(commonFactors(7, 9));              // [1]