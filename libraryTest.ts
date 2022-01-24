import { Library } from "./library";
import { Book } from "./book";

let libro1 = new Book("La mosca", 200, "0-7645-2641-3", "Quijote", "editmala");
let libro2 = new Book("La mosca", 200, "0-7645-2641-3", "Manchado", "editmala");
let libro3 = new Book("La mosca", 200, "0-7645-2641-3", "Quijote", "editmala");
let libreria1 = new Library([libro1,libro2,libro3], "direccionLibreria", "pepito de los palotes");

console.log(libreria1.getNumberOfBooks());
console.log(libreria1.findByAuthor("Quijote"))
console.log("La dirección es: " + libreria1.getAddress());
console.log("El manager es: " + libreria1.getManager());
libreria1.setAddress("Avd Fuente");
libreria1.setManager("Ruiz");
console.log("La nueva dirección es: " + libreria1.getAddress());
console.log("El nuevo manager es: " + libreria1.getManager());
console.log(libreria1.toString());

