function strangeSums(nums) {
    let pairs = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let pair = [nums[i], nums[j]];

            if (pair[0] + pair[1] === 0) {
                pairs.push(pair);
            }
        }
    }
    return pairs.length;
}


console.log(strangeSums([2, -3, 3, 4, -2]));     // 2
console.log(strangeSums([42, 3, -1, -42]));      // 1
console.log(strangeSums([-5, 5]));               // 1
console.log(strangeSums([19, 6, -3, -20]));      // 0
console.log(strangeSums([9]));                   // 0