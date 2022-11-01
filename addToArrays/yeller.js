function yeller(words) {
    let yelledArray = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i].toUpperCase();
        yelledArray.push(word);
    }

    return yelledArray;
}

console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]