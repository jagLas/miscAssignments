function countVowels(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        let vowels = 'aeiouAEIOU';
        if(vowels.includes(word[i])) {
            count++
        }
    }
    
    return count;
  };
  
  console.log(countVowels("bootcamp")); // => 3
  console.log(countVowels("apple")); // => 2
  console.log(countVowels("pizza")); // => 2