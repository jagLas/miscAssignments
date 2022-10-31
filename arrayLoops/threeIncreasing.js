function threeIncreasing(array) {
    //start at third value and iterate through rest of array

    for (let i = 2; i < array.length; i++){
        
        //return true if any values and their two previous values are 1 and 2 less than value
        let num0 = array[i];
        let num1 = array [i-1];
        let num2 = array [i-2];
        if (num0 === num1 + 1 && num0 === num2 + 2){
            return true
        } 
    }
    return false
}


console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false