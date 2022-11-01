function longWords(words) {

    let longArray = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 5){
            longArray.push(word);
        }
    }
    return longArray;
}





console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]