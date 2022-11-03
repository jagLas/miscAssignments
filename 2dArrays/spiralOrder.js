function removeLastCol(matrix) {   //removes the last column and returns it
    let removedCol = [];

    for (let i = 0; i < matrix.length; i++) {   //iterates down
        removedCol.push(matrix[i].pop());       //removes last value from each row and pushes to removedCol
    }

    return removedCol;
}

function removeFirstCol(matrix) {
    let removedCol = [];

    for (let i = 0; i < matrix.length; i++) {   //iterates down
        removedCol.push(matrix[i].shift());     //removes first value from each row and pushes to removedCol
    }

    return removedCol;
}

function spiralOrder(matrix) {

    let copy = matrix.slice();  //makes a copy of original matrix
    let spiral = [];    //defines variable for output to return
    
    while (copy.length > 0) {   //while the array is not empty
        spiral.push(copy.shift()); //removes first row and pushes to spiral


        if (copy.length === 0) {    //if array is empty, break loop.
            break;
        }

        spiral.push(removeLastCol(copy)); // removes last column and push to spiral

        
        if (copy.length === 0) {    //if array is empty, break loop.
            break;
        }

        let lastRow = copy.pop();   //removes last row
        spiral.push(lastRow.reverse());  //reverses it and pushes to spiral


        if (copy.length === 0) {    //if array is empty, break loop.
            break;
        }
        
        let firstCol = removeFirstCol(copy);    //removes first column
        spiral.push(firstCol.reverse())   //reverses column and pushes to spiral

    }

    let fixedSpiral = [];   //spiral is a 2D array. Fixed spiral will be 1-dimensional

    for (let i = 0; i < spiral.length; i++) {   //extracts values and puts into fixedSpiral
        for (let j = 0; j < spiral[i].length; j++){
            fixedSpiral.push(spiral[i][j]);
        }
    }
    return fixedSpiral;
}
  
  
  matrix = [[ 1, 2, 3],
            [ 4, 5, 6],
            [ 7, 8, 9]]
  
  console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

  matrix = [[1, 2, 3, 4],
            [5, 6, 7, 8],
            [9,10,11,12]]
  
  
  console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

  matrix = [[1, 2, 3],
            [5, 6, 7],
            [9,10,11],
            [13,14,15]]
  
console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]