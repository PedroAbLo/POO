const LibPerson = require("./person.js");

let persona2 = new LibPerson("Antonio","Lopez",170,80,1985);

console.log(persona2.printAll());
console.log(persona2.printHobbies());
console.log(persona2.calcularIMC());
