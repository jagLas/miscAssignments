function adjacentSums(numbers) {
    let sums = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        let num1 = numbers[i];
        let num2 = numbers[i+1];
        sums.push(num1 + num2);
    }
    return sums;
}

// console.log(adjacentSums([1,3, 3,1]));

function pascalsTriangle(n){
    if (n === 0) {
        return null;
    }
    
    let triangle = [[1]];

    if (n === 1) {
        return triangle;
    }

    for (let i = 0; i < n - 1; i++) {
        let newRow = [1];
        
        if (i === 0){
            newRow.push(1);
            triangle.push(newRow);
        }
        
        else {
        // console.log(i);

        let middleSums = adjacentSums(triangle[i]);

        for (let index = 0; index < middleSums.length; index++){
            newRow.push(middleSums[index]);
        }

        newRow.push(1);

        // console.log('   ' + newRow);
        triangle.push(newRow);

        }
    }


    return triangle;
}

// For example, here are the first 5 levels of Pascal's triangle:
//       1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1

// Your code here



console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

console.log(pascalsTriangle(7));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1],
//     [1, 5, 10, 10, 5, 1],
//     [1, 6, 15, 20, 15, 6, 1]
// ]