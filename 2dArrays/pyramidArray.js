function pyramidArray(base) {
    let newArray = [];
    newArray.push(base);

    let nextRow = [];

    for (let i = 0; newArray[0].length > 1; ) {
        // console.log(`i = ${i}`);
        let nextRow = [];
        for (let j = 0; j < newArray[i].length - 1; j++){
            // console.log(`       j = ${j}`)
            let num1 = newArray[i][j];
            let num2 = newArray[i][j+1];

            nextRow.push(num1 + num2);
            // console.log(`       ${nextRow}`)
        }
        newArray.unshift(nextRow);
    }

    return newArray;
}

// For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:
//
//           85
//         37  48
//       15  22  26
//    5   10   12   14
//  2   3    7    5    9
//
//
// Your code here



let p1 = pyramidArray([2, 3, 7, 5, 9]);
console.log(p1);
// [
//   [ 85 ],
//   [ 37, 48 ],
//   [ 15, 22, 26 ],
//   [ 5, 10, 12, 14 ],
//   [ 2, 3, 7, 5, 9 ]
// ]

let p2 = pyramidArray([2, 2, 2, 2]);
console.log(p2);
// [
//   [ 16 ],
//   [ 8, 8 ],
//   [ 4, 4, 4 ],
//   [ 2, 2, 2, 2 ]
// ]

let p3 = pyramidArray([2, 2, 2, 2, 2, 2]);
console.log(p3);
// [
//   [ 16 ],
//   [ 8, 8 ],
//   [ 4, 4, 4 ],
//   [ 2, 2, 2, 2 ]
// ]