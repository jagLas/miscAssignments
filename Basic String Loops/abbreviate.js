// function abbreviate(word){

//     word = word.replaceAll('a', '');
//     word = word.replaceAll('e', '');
//     word = word.replaceAll('i', '');
//     word = word.replaceAll('o', '');
//     word = word.replaceAll('u', '');
//     word = word.replaceAll('A', '');
//     word = word.replaceAll('E', '');
//     word = word.replaceAll('I', '');
//     word = word.replaceAll('O', '');
//     word = word.replaceAll('U', '');

//     return word
// };

function abbreviate(word){
    let vowels = 'aeiouAEIOU';
    let abbreviatedWord = '';
    for (let i=0; i < word.length; i++){
        if(vowels.includes(word[i]) === false){
            abbreviatedWord = abbreviatedWord.concat(word[i]);
        }
    }
    return abbreviatedWord;
};

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrd