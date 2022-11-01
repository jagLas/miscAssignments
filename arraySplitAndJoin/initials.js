function initials(name) {
    let nameArray = name.split(' ')
    let initials = '';
    for (let i = 0; i < nameArray.length; i++) {
        namePart = nameArray[i];
        initials += namePart[0].toUpperCase();
    }
    return initials;
}

console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'