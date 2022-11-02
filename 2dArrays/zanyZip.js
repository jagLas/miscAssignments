function zanyZip(arr1, arr2) {
    let newArray = [];
    for (let i = arr1.length; i < arr2.length; i = arr1.length) {
        arr1.push(null);
    }

    for (let i = arr2.length; i < arr1.length; i = arr2.length) {
        arr2.push(null);
    }
    for (let i = 0; i < arr1.length; i++) {
        let el1 = arr1[i];
        let el2 = arr2[i];
        newArray.push([el1, el2]);
    }

    return newArray;
}



console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// // [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]