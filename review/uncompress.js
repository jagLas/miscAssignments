function uncompress(string) {
    newString = '';
    for (let i = 0; i < string.length; i += 2) {
        let char = string[i];
        let num = Number(string[i+1]);

        for (let j = 0; j < num; j++) {
            newString += char;
        }
    }
    return newString;
}


console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'