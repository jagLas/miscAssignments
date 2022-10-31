function hasVowel(str){
    const vowels = ["a", "e", 'i', 'o', 'u'];
    let vowelCount = false;
    for (let i = 0; i < str.length; i++){
        if(vowels.indexOf(str[i]) > -1){
            vowelCount = true;
        }
    }
    return vowelCount;
}


console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false