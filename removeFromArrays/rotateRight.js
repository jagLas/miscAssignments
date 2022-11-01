let rotateRight = function(array, num) {
    newArray = array.slice();
    for (let i = 0; i < num; i++) {
        let el = newArray.pop();
        newArray.unshift(el);
    }

    return newArray;
}

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]

let numbers = [1, 2];
console.log(rotateRight(numbers, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(numbers); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]