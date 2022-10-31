// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
    // checks if first letter is vowel and adds a yay if it does.
    const vowels = 'aeiouAEIOU';
    let pigWord;
    if (vowels.includes(word[0]) === true){
        pigWord = word + "yay"
    } else {
        
        //Finds index of the firstVowel
        let firstVowel = 0;
        for (i=1; firstVowel < 1 ; i++){
            if (vowels.includes(word[i]) === true){
                firstVowel = i;
            }
        }
        //Rearrange string
        pigWord = word.slice(firstVowel) + word.slice(0, firstVowel) + "ay";
    }
    return pigWord;
  };
  
  console.log(pigLatinWord("apple")); //=> "appleyay"
  console.log(pigLatinWord("eat")); //=> "eatyay"
  console.log(pigLatinWord("banana")); //=> "ananabay"
  console.log(pigLatinWord("trash")); //=> "ashtray"