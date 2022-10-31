// iterate through array
// check if value is in array, return true if it is
// return -1 if not found in loops

function myIndexOf(arr, target) {
    for (let i =0; i < arr.length; i++) {
        if (arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1