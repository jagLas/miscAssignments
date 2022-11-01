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

function pickPrimes(array) {
    let primes = [];
    for (let i = 0; i < array.length; i++) {
        if(isPrime(array[i])){
            primes.push(array[i]);
        }
    }

    return primes;
}

console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]