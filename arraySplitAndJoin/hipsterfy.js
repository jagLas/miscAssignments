function removeLastVowel(string) {

    let vowels ='aeiouAEIOU'

    for (let i = string.length -1; i >=0; i--) {

        char = string[i];

        if (vowels.includes(char)) {
            return string.slice(0,i).concat(string.slice(i+1));
        }
    }

    return string;

}

function hipsterfy(sentence) {
    let words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        words.splice(i, 1, removeLastVowel(word));
    }

    return words.join(' ');
}

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'