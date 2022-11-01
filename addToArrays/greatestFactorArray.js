function greatestFactorArray(array) {
    
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if(num % 2 === 0){
            newArray.push(greatestFactor(num));
        }   else {
            newArray.push(num);
        }
    }

    return newArray;
}

function greatestFactor(num) {
    for (let i = num - 1; i > 0; i--){
        if (num % i === 0){
            return i;
        }
    }

    return 'is prime'
}


console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]