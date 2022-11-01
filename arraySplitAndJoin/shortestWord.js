function shortestWord(sentence) {
    let words = sentence.split(' ');
    let shortestWord = words[0];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length <= shortestWord.length){
            shortestWord = word;
        }
    }

    return shortestWord
}



console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'