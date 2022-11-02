function consonantCancel(sentence) {
    let words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        words.splice(i, 1, removeFirstConsonants(words[i]));
    }

    return words.join(' ');
}

function removeFirstConsonants(word) {
    let vowels = 'aeiouAEIOU';

    for (let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i])) {
            return word.slice(i);
        }
    }
    return word;

}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"