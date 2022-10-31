function fibonacci(length) {

    //code for indexes 0-2

    let fibArray = []

    if(length === 1){
        fibArray = [1]

    } else if(length >= 2) {
        fibArray=[1, 1]}

    //loop code to generate lengths longer than 2

    if (length > 2){
        for (let i=1; i < length -1; i++){
            let num1 = fibArray[i];
            let num2 = fibArray[i-1];
            let sum = num1 + num2;
            fibArray.push(sum);
        }
    }

    return fibArray;
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]