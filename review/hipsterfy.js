function hipsterfy(sentence) {
    let sentenceArr = sentence.split(' ');
    for (let i = 0; i < sentenceArr.length; i++) {
        let newWord = removeLastVowel(sentenceArr[i]);
        sentenceArr.splice(i, 1, newWord);
    }

    return sentenceArr.join(' ');

}

function removeLastVowel(word) {
    for (i = word.length - 1; i >= 0; i--) {
        let vowels = 'aeiouAEIOU';
        let char = word[i]
        if (vowels.includes(char)) {
            return word.slice(0,i) + word.slice(i+1);
        }
    }
    return word;
}

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'