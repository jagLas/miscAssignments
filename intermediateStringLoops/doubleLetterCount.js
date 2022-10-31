function doubleLetterCount(string) {
    // your code here
    let doubleLetterCount = 0;
    for (let i = 1; i < string.length; i++){
        if (string[i] === string[i-1]){
            doubleLetterCount ++;
        }
    }
    return doubleLetterCount;
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1