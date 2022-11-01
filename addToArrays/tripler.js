function tripler(nums) {
    let newArray = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 3;
        newArray.push(num);
    }

    return newArray;
}

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]