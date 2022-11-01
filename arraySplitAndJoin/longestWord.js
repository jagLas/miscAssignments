function longestWord(sentence) {
    let words = sentence.split(' ');
    let longest = words[0];

    for (let i = 0; i < words.length ; i++) {
        if (words[i].length > longest.length){
            longest = words[i];
        }
    }
    
    return longest;
}




console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''