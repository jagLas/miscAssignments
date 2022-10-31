// Feel free to use this variable:
// const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, num) {
   
    //define alphabet and declare variable for new word

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let caesarWord = '';

    // iterate through word identifying each letter

    for (let i = 0; i < string.length; i++){

        // identify index of alphabet for each letter
        let alphaIndex = alphabet.indexOf(string[i]);

        // console.log(alphaIndex);

        let newIndex = (alphaIndex + num) % 26;

        // console.log(newIndex);

        // make new word by using alphabet index plus num

        caesarWord += alphabet[newIndex];

    }

    return caesarWord;
    
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"