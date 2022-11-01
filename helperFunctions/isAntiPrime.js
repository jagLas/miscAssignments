let factorCount = function(num) {
    count = 0;

    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    };
    return count;
};

// console.log(factorCount(1));
// console.log(factorCount(2));
// console.log(factorCount(4));
// console.log(factorCount(12));
// console.log(factorCount(9));

let isAntiPrime = function(num) {
    let nearestAntiPrimeFactors = 0;
    let nearestAntiPrime = 0;

    for (let i = 0; i <= num; i++) {
        if (factorCount(i) > nearestAntiPrimeFactors) {
            nearestAntiPrimeFactors = factorCount(i);
            nearestAntiPrime = i;
        }
    }
    if (num === nearestAntiPrime) {
        return true
    }   return false
}

console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false