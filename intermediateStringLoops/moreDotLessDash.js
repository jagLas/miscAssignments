// Your code here
function moreDotLessDash(string){
    let dotCount = 0;
    let dashCount = 0;
    for (i=0; i < string.length; i++){
        if (string[i] === '.'){
            dotCount ++;
        } else if (string[i] === '-'){
            dashCount ++;
        }
    }
    if (dotCount > dashCount){
        return true;
    } else {
        return false;
    }
}


console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false