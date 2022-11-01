function removeLastVowel(word) {

    let lastVowel = null;

    for (let i = word.length - 1; lastVowel === null && i >= 0; i--) {
        let vowels = 'aeiouAEIOU';

        if (vowels.includes(word[i])) {
            lastVowel = i;
        }
    }
    let newWord = word.slice(0, lastVowel) + word.slice(lastVowel + 1);
    return newWord;
}



console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
console.log(removeLastVowel('gamma'));