function sameCharCollapse(str) {
    let chars = str.split('');

    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];
        let nextChar = chars[i+1];

        if (char === nextChar){
            chars.splice(i, 2);
        }
    }
    return chars
}

//REPEAT MORE TIMES

console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv