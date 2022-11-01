function adjacentSums(nums) {
    let newNums = [];

    for (let i = 1; i < nums.length; i++) {
        let num1 = nums[i];
        let num0 = nums[i-1];
        newNums.push(num1 + num0);
    }

    return newNums
}


console.log(adjacentSums([3, 8, 7, 1]));        // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9]));    // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3]));          // [-1, 0]