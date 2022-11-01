function minValue(nums) {

    if (Array.isArray(nums) === false || nums.length === 0) { //checks if array or empty
        return null;
    }

    let smallest = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (num < smallest) {
            smallest = num;
        }
    }

    return smallest;
}



console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null