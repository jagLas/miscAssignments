// your code here
function leastCommonMultiple(num1, num2){
    let lcm = 0
    for (let i=num1; lcm < 1; i += num1){
        if(i % num2 === 0){
            lcm = i
        }
    }
    return lcm
}






console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10