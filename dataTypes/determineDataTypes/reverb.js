function reverb(word) {
    if (typeof word !== 'string'){
        return null;
    }

    let lastVowelIndex = null;

    for (let i = word.length - 1; lastVowelIndex === null; i--) {
        let vowels = 'aeiouAEIOU'
        if (vowels.includes(word[i])){
            lastVowelIndex = i;
        }
    }

    return word + word.slice(lastVowelIndex);
}

console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null