function reverseSentence(sentence) {

    let words = sentence.split(' ');
    let reversedWords = words.reverse().join(' ');
    return reversedWords;
}

console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'