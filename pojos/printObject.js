function printObject(obj) {
    for (let currentKey in obj){
        console.log(currentKey + ' - ' + obj[currentKey]);
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