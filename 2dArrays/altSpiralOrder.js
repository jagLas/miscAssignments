function spiralOrder(matrix) {
    let spiral = [];    //defines variable for output to return

    let length = matrix[0].length;
    let height = matrix.length;

    let cycle = 0;
    let numCycles = 0;
    if (length < height) {
        numCycles = Math.round(length / 2);
    }
    else {
        numCycles = Math.round(height / 2);
    }
    // console.log(`length = ${length}, height = ${height}, and numCycles = ${numCycles}`)

    //begin loop
    while (cycle < numCycles){
        // console.log(`Cycle ${cycle}`)
        // console.log('   across to right')
        for (let j = cycle; j < length - cycle; j++){
            let num = matrix[cycle][j];

            // console.log('           ' +num)
            spiral.push(num);
        }
        // console.log('   down last')
        for (let i = cycle + 1, j = length - 1 - cycle; i < height - cycle; i++){
            let num = matrix[i][j];
            // console.log('           ' +num)
            spiral.push(num);
        }

        // console.log('   backwards through bottom')
        for (let i = height -1 - cycle, j = length - 2 - cycle; j >= cycle && i > cycle; j--){
            let num = matrix[i][j];
            // console.log('           ' + i + ',' +j)
            // console.log('           ' +num)
            spiral.push(num);
        }
        // console.log('   up through first')
        for (let i = height - 2 - cycle, j = cycle; i > cycle; i--) {
            let num = matrix[i][j];
            // console.log('           ' +num)
            spiral.push(num);
        }
        cycle++;
    }
    return spiral;
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
  
console.log(spiralOrder(matrix)); // 

matrix =   [[1, 2, 3,4,5],
            [5, 6, 7,6,7],
            [9,10,11,1,2],
            [13,14,15,3,4]]
  
console.log(spiralOrder(matrix)); // 