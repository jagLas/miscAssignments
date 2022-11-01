function hasDoubleLetter(str) {

    if (typeof str !== 'string') {

        return null
    }

    for (let i = 1; i < str.length; i++) {

        let firstChar = str[i-1];
        let secondChar = str[i];

        if (firstChar === secondChar){
            return true;
        }
    }

    return false;
}


console.log(hasDoubleLetter('deer')); // true
console.log(hasDoubleLetter('boot camp')); // true
console.log(hasDoubleLetter('toggle')); // true
console.log(hasDoubleLetter('taco')); // false
console.log(hasDoubleLetter('jumper')); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(['array'])); // null