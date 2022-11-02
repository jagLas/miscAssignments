function maxInMatrix(matrix) {
    let max = null;

    for (let i = 0; i < matrix.length; i++) {
        let subArray = matrix[i];

        for (j = 0; j < subArray.length; j++) {
            let num = subArray[j];
            if (num > max || max === null) {
                max = num;
            }
        }
    }

    return max;
  }
  
  
  matrix = [[11,  2,-99],
            [20, 19, 10],
            [47, 72, 56]]
  
  console.log(maxInMatrix(matrix)); // 72
  