function tripleSequence(start, length) {
    let nums = [];

    for (let i = start; nums.length < length; i *= 3){
        nums.push(i);
    }

    return nums;
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]