function maxColumn(matrix) {
    let maxes = [];

    for (let col = 0; col < matrix[0].length; col++){   //iterate through each column
        let max = -Infinity;    //initilize value to lowest possible
        for (let row = 0; row < matrix.length; row++){  //iteratore through rows
               if (matrix[row][col] > max) {    //if the value in the row is higher than current max
                max = matrix[row][col]; //set the new max to that value
               }
        }
        maxes.push(max);    //push the columns max to array of maxes
    }
    return maxes;   //return array
  }
  
  
  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]
  
  console.log(maxColumn(matrix)); // [12, 19, 21]
  
  