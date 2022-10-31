function isPrime(num){
    
    let isPrime = true
    for (let i = 3; i < num; i++){
        if (num % i === 0){
            isPrime = false
        }
    }
    return isPrime;
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true