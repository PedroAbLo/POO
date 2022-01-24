import { Person } from "./person";

export class Contacts
{

    people : Person[];

    constructor(){

        this.people = [];
    }

    public printCalendar():void{

        for(let i = 0; i < this.people.length; i++){
            this.people[i].printName();
            console.log(this.people[i].yearOfBirth(2022))
            console.log(this.people[i].getAddress())

            // for(const dato in this.people[i]){
            //     console.log(dato + ": " +  this.people[i][dato]);
                //}

            
        }

    }
   




}
let persona1 = new Person("Juan", 25, "Mayor");
let contactos = new Contacts();
contactos.people.push(persona1);
contactos.people.push(persona1);
// console.log(contacto.people[0])
// console.log(contacto[0]);
contactos.printCalendar();

