// Your code here
function sillyString(str){
    let sillyStr = '';
    for (i=0; i < str.length; i++){
        //if function for vowels
        let vowels = 'aeiou'
        if (vowels.includes(str[i]) === true ){
            sillyStr += str[i] + "b" + str[i];

        } else {
            sillyStr += str[i];
        }
    }
    return sillyStr;
}

console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber