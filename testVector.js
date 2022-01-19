
const LibVector = require("./vector.js");

let array = new LibVector.Vector(4,5);
let a = [];
for(let i = 0; i < 4; i++){
    a[i] = Math.round(Math.random()*5);
}
console.log(array.add(a));
console.log(array.subs(a));
console.log(array.productoNum(5));
console.log(array.producto(a));