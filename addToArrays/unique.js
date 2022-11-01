function unique(array) {
    let uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
        let char = array[i];
        if (uniqueArray.includes(char) === false){
            uniqueArray.push(char);
        }
    }

    return uniqueArray;
}

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']