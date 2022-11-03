// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

function repeatingTranslate(sentence) {
    let newSentence = sentence.split(' ');
    let translated = [];
    
    for (let i = 0; i < newSentence.length; i++) {
        let word = newSentence[i];

        if (word.length < 3) {
            translated.push(word);
        }

        else if('aeiouAEIOU'.includes(word[word.length - 1])) {
            translated.push(word + word);
        }

        else {
            translated.push(repeatConsonants(word));
        }
    }
    return translated.join(' ');
}

function repeatConsonants(word) {
    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i];
        if ( 'aeiouAEIOU'.includes(char)){
            return word + word.slice(i, word.length); 
        }
    }
    return word;
}

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"