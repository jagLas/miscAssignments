// function hasThreeVowels(str){
//     let aPresent = str.indexOf('a') >=0
//     let ePresent = str.indexOf('e') >=0
//     let iPresent = str.indexOf('i') >=0
//     let oPresent = str.indexOf('o') >=0
//     let uPresent = str.indexOf('u') >=0
//     vowelCount = 0;
//     if (aPresent === true){
//         vowelCount ++;
//     }
//     if (ePresent === true){
//         vowelCount ++;
//     }
//     if (iPresent=== true){
//         vowelCount ++;
//     }
//     if (oPresent === true){
//         vowelCount ++;
//     }
//     if (uPresent ===true){
//         vowelCount ++;
//     }
//     if (vowelCount >2){
//         return true
//     } else {
//         return false
//     }
// }

function hasThreeVowels(str){
    vowels = 'aeiou'
    let vowelCount = 0;
    for (let i = 0; i < vowels.length; i++){
        if (str.includes(vowels[i]) === true){
            vowelCount ++;
        }
    }
    return vowelCount > 2;
}

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false