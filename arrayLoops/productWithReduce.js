function productWithReduce(nums) {
    let arrayProduct = 1;
    for (let i = 0 ; i < nums.length; i++) {
        arrayProduct *= nums[i];
    }
    return arrayProduct;
}

console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12