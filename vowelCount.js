function countVowels(word){
    const vowels = ["a", "e", 'i', 'o', 'u'];
    let vowelCount = 0;
    for (let i = 0; i < word.length; i++){
        if(vowels.indexOf(word[i]) > -1){
            vowelCount ++;
        }
    }
    return vowelCount;
}


console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2