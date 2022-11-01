function reverseString(str) {

    let arr = str.split('');
    let reversedStr = arr.reverse().join('');
    return reversedStr;
}

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'