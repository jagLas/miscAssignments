function mostVowels(sentence) {

    // split sentence into array of words
    let words = sentence.split(' ');
    let mostVowels = '';

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];

        if(vowelCount(currentWord) > vowelCount(mostVowels)) {
            mostVowels = currentWord;
        }
    }

    return mostVowels;

}

function vowelCount(word) {

    let count = 0;
    let vowels = 'aeiouAEIOU'

    for (let i = 0; i < word.length; i++) {
        char = word[i];

        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(mostVowels("what a wonderful life")); // "wonderful"