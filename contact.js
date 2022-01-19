
const Person = require("./person.js");
const LibPerson = require("./person.js");

class Contacts
{

    constructor(año)
    {
        this.personas = [];
        this.edad=

    }

    printPersons()
    {

        for(let i =0; i < this.personas.length; i++){
            this.personas[i].printAll();
        }
        // for(let i = 0; i<this.personas.length; i++){
        //     for(const atributo in this.personas[i]){
        //         console.log(this.personas[i][atributo]);

        //     }
        // }
        // console.log()

    }

}
let persona1 = new LibPerson("Antonio", "Saez", 160,60,1990, ["jugar", "correr"]);
let persona2 = new LibPerson("Antonio", "Saez", 160,60,1990, ["jugar", "correr"]);
let persona3 = new LibPerson("Antonio", "Saez", 160,60,1990, ["jugar", "correr"]);
let contacts = new Contacts();

// console.log(persona1)
contacts.personas.push(persona1);
contacts.personas.push(persona2);
contacts.personas.push(persona3);

contacts.printPersons();
// console.log(contacts.printPersons());

module.exports ={ Contacts };

