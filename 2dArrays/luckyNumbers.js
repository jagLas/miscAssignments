function luckyNumbers(matrix) {

    let height = matrix.length;
    let length = matrix[0].length;
    let luckyNumbers = [];

    //go through each row and find smallest number
    for (let row = 0; row < height; row++) {

        let smallestNum = Infinity;
        let smallestCol = 0;

        for (let col = 0; col < length; col++) {
            let currentNum = matrix[row][col];
            if (currentNum < smallestNum) {
                smallestNum = currentNum;
                smallestCol = col;
            }
        }

        for (let i = 0; i < height; i++) {
            let currentNum = matrix[i][smallestCol]
            if (currentNum > smallestNum) {
                smallestNum = null;
            }
        }

        if (smallestNum !== null) {
            luckyNumbers.push(smallestNum);
        }
    }
        
    return luckyNumbers;
}  
  
  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]
  
  console.log(luckyNumbers(matrix)); // [12]
  
  matrix = [[ 5, 10,  8,  6],
            [10,  2,  7,  9],
            [21, 15, 19, 10]]
  
  console.log(luckyNumbers(matrix)); // [10]