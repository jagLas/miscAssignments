let isPrime = function(num) {
    if (num < 2){
        return false;
    }
 
    for (let i = 2; i < num; i++){
        if (num % i === 0) {
            return false;
        };
    };

    return true;
};

let primeFactors = function(num) {

    let factors = [];

    for (let i = 0; i <= num; i++) {
        if (isPrime(i) && num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
// Your code here



console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]