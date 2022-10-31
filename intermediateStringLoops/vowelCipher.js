function vowelCipher(string) {
    // 1. define alphabet string and variable for output
    // 2. iterate through word
    // 3. Conditional checking if letter is a vowel
    //  a. identify index of the vowel
    //  b. shift index of vowel by one % vowel.length
    //  c. identify new character and append to newWord
    // 3.1 Append original character if not vowel
    // 4. return new word.

    const vowels = 'aeiou';
    let newWord = '';

    for (let i=0; i < string.length; i++) {
        let char = string[i];
        if (vowels.includes(char) === true) {
            let vowelIndex = vowels.indexOf(char);
            let newVowelIndex = (vowelIndex + 1) % vowels.length;
            let newChar = vowels[newVowelIndex];
            newWord += newChar;
        } else {
            newWord += char;
        }
    }

    return newWord;
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"