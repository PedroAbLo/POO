import { Vector } from "./vector";



 let array1 = new Vector(5,5);
 let arrayTotal = new Vector(5,5);
 
 console.log(array1);
 console.log(arrayTotal);
 array1.print();
 console.log(arrayTotal.add(array1));
 console.log(arrayTotal.subs(array1));
 console.log(arrayTotal.mult(array1));
 console.log(array1.multNumber(5));
 
