function pairsMaker(arr) {

    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        let el1 = arr[i];

        for (let j = i + 1; j <arr.length; j++) {
            let el2 = arr[j];
            newArray.push([el1, el2]);
        }
    }
    
    return newArray;
}

function twoSum(arr, target) {
    let pairs = pairsMaker(arr)

    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i];
        if (pair[0] + pair[1] === target) {
            return true;
        }
    }

    return false;
}

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false