"use strict";
exports.__esModule = true;
exports.Contacts = void 0;
var person_1 = require("./person");
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.people = [];
    }
    Contacts.prototype.printCalendar = function () {
        for (var i = 0; i < this.people.length; i++) {
            this.people[i].printName();
            console.log(this.people[i].yearOfBirth(2022));
            console.log(this.people[i].getAddress());
            // for(const dato in this.people[i]){
            //     console.log(dato + ": " +  this.people[i][dato]);
            //}
        }
    };
    return Contacts;
}());
exports.Contacts = Contacts;
var persona1 = new person_1.Person("Juan", 25, "Mayor");
var contactos = new Contacts();
contactos.people.push(persona1);
contactos.people.push(persona1);
// console.log(contacto.people[0])
// console.log(contacto[0]);
contactos.printCalendar();
