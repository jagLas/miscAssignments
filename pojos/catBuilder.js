function catBuilder(name, color, toys) {
    let cat = {};
    cat.name = name;
    cat.color = color;
    cat.toys = toys;
    return cat;
  }
  
  console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
  // prints: { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }
  
  console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
  // prints: { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }