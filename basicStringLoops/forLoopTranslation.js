function aCounter(word) {
    for (index = 0, count = 0; index < word.length; index++) {
      let char = word[index];
      if (char === "a" || char === "A") {
        count += 1;
      }
    }
    return count;
  };
  
//   function aCounter(word) {
//     let index = 0;
//     let count = 0;
//     while (index < word.length) {
//       let char = word[index];
//       if (char === "a" || char === "A") {
//         count += 1;
//       }
//       index++;
//     }
//     return count;
//   };

  console.log(aCounter("apple")); // => 1
  console.log(aCounter("appleapple")); // => 2
  console.log(aCounter("aAapple")); // => 3