import {Person} from "./person"

let persona1 = new Person("Juan", 23, "C/ Mayor");

persona1.printName();
console.log(persona1.yearOfBirth(2022));
console.log(persona1.getAddress());
persona1.setAddress("C/ San Francisco");
console.log(persona1.getAddress());