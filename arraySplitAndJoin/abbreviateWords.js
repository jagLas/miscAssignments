function removeVowels(string) {
    let noVowels = '';

    for (let i = 0; i < string.length; i++) {

        let vowels = 'aeiouAEIOU';

        if (!vowels.includes(string[i])){
            noVowels += string[i];
        }
    }

    return noVowels;
}

function abbreviateWords(sentence) {
    let words = sentence.split(' ');
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 4) {
            newWords.push(removeVowels(word));
        } else {
            newWords.push(word);
        }
    }

    return newWords.join(' ');
}


console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg