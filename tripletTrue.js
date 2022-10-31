// Your code here
function tripletTrue(str){
    let result = false;
    for (i=2; i < str.length; i ++){
        if (str[i] === str[i-1] && str[i] === str[i-2]){
            result = true
        }
    }
    return result;
}


console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false