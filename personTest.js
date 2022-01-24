"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var persona1 = new person_1.Person("Juan", 23, "C/ Mayor");
persona1.printName();
console.log(persona1.yearOfBirth(2022));
console.log(persona1.getAddress());
persona1.setAddress("C/ San Francisco");
console.log(persona1.getAddress());
