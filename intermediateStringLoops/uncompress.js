// your code here
function uncompress(str){
    //loop taking two symbols at a time
    let fullString ='';
    for (i=0; i < str.length; i +=2){
        let num = str[i+1];
        for (index=0; index < num; index++){
            fullString += str[i]
        }
    }
    return fullString;
}

console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'