function sameCharCollapse(str) {
    let noPairFound = false;

    while (noPairFound ===false) {
        if (deletePair(str) === 'no pairs'){
            noPairFound = true;
        }   else {
            str = deletePair(str);
        }

    }
    return str;

}

function deletePair(str) {
    let chars = str.split('');

    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];
        let nextChar = chars[i+1];

        if (char === nextChar){
            chars.splice(i, 2);
            return chars.join('');
        }
    }
    return 'no pairs';
}

console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv