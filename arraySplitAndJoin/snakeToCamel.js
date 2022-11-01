function snakeToCamel(string) {
    let words = string.split('_');
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let cap = word[0].toUpperCase();
        let newWord = cap + word.slice(1).toLowerCase();
        newWords.push(newWord);
    }
    return newWords.join("");
}



console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'