import {Contacts} from "./contact";
import { Person } from "./person";

let persona1 = new Person ("Juan", 20, "C/ Mayor");
let persona2 = new Person ("Antonio", 25, "C/ San Francisco");
let persona3 = new Person ("Paco", 35, "C/ San Pedro");

let contactos = new Contacts;


contactos.people.push(persona1);
contactos.people.push(persona2);
contactos.people.push(persona3);
console.log(contactos);

contactos.printCalendar();