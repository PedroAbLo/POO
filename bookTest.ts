import {Book} from "./book";


let libro1 = new Book("La mosca", 200, "0-7645-2641-3", "Quijote", "editmala");
console.log(libro1.getPages());
console.log(libro1.getAuthor());
console.log(libro1.getEditorial());
console.log(libro1.getIsbn());
console.log(libro1.getTitle());
console.log(libro1.toString());

libro1.setTitle("Aventuras extraordinarias");
libro1.setPages(250);
libro1.setIsbn("45k-234-2234");
libro1.setAuthor("AndresPD");
libro1.setEditorial("Periquito Perez");

console.log(libro1.getPages());
console.log(libro1.getAuthor());
console.log(libro1.getEditorial());
console.log(libro1.getIsbn());
console.log(libro1.getTitle());
console.log(libro1.toString());


