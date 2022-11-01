function removeEWords(sentence) {
    words = sentence.split(' ');
    let newWords = [];
    for (let i = 0; i < words.length; i++) {
        if (eCheck(words[i])) {

        } else {
            newWords.push(words[i]);
        }
    }
    return newWords.join(' ');
}

function eCheck(word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'e' || word[i] === 'E') {
            return true;
        }
    }
    return false;
}

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'