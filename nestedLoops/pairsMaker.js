function pairsMaker(arr) {

    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        let el1 = arr[i];

        for (let j = i + 1; j <arr.length; j++) {
            let el2 = arr[j];
            newArray.push([el1, el2]);
        }
    }
    
    return newArray;
}


console.log(pairsMaker(['a', 'b', 'c', 'd'])); // =>
// [ [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'a', 'd' ],
//   [ 'b', 'c' ],
//   [ 'b', 'd' ],
//   [ 'c', 'd' ] ]

console.log(pairsMaker(['Rosemary', 'Alex', 'Connor'])); // =>
// [ [ 'Rosemary', 'Alex' ],
//   [ 'Rosemary', 'Connor' ],
//   [ 'Alex', 'Connor' ] ]