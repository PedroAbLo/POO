const LibPerson = require("./person.js");

class Contacts
{
    constructor()
    {
        this.personas = [];

    }

    printPersons()
    {
        return this.personas;

    }

}
let persona1 = new LibPerson("Antonio", "Saez", 160,60,1990, ["jugar", "correr"]);
let persona2 = new LibPerson("Antonio", "Saez", 160,60,1990, ["jugar", "correr"]);
let persona3 = new LibPerson("Antonio", "Saez", 160,60,1990, ["jugar", "correr"]);
// console.log(persona1)
// personas.push(persona1);
// this.personas.push(persona2);
// this.personas.push(persona3);


// console.log(printPersons(contactos));

module.exports ={ Contacts };

