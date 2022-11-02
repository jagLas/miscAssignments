function matrixAddition(matrix1, matrix2) {
    let height = matrix1.length;
    let length = matrix1[0].length;
    let addedMatrix = [];

    for (let row = 0; row < height; row ++){
        newRow = [];
      
        for (let col = 0; col < length; col++) {
            let num1 = matrix1[row][col];
            let num2 = matrix2[row][col];
            newRow.push(num1 + num2);
        }
        addedMatrix.push(newRow);
    }

    return addedMatrix;
}



let matrixA = [[2,5], [4,7]]
let matrixB = [[9,1], [3,0]]
let matrixC = [[-1,0], [0,-1]]
let matrixD = [[2, -5], [7, 10], [0, 1]]
let matrixE = [[0 , 0], [12, 4], [6,  3]]

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]