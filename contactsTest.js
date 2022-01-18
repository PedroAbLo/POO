const LibConctacts = require("./contact.js");
const LibPersona = require ("./person.js");

let persona1 = new LibPersona("juan","gil",150,50,1980,["jugar","viajar"])
console.log(persona1);
let contact1 = new LibConctacts.Contacts();
console.log(contact1);
contact1.personas.push(persona1);
console.log(contact1);

console.log(persona1.nombre);
console.log(persona1.apellido1);
console.log(persona1.altura);
console.log(persona1.peso);
console.log(contact1.printPersons());
