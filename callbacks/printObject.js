function printObject(obj) {
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    for (let i = 0; i < keys.length; i++) {
        console.log(keys[i] + ' - ' + values[i]);
    }
  }
  
  let bootcamp = {
    name: "App Academy",
    color: "Red",
    population: 120
  };
  
  printObject(bootcamp); // prints
  // name - App Academy
  // color - Red
  // population - 120

//   Provided solution
// function printObject(obj) {
//     for (let key in obj) {
//       let value = obj[key];
//       console.log(key + ' - ' + value);
//     }
//   }