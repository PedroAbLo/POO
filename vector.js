"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.n = n;
        this.k = k;
        this.elements = new Array(n);
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i] = Math.round(Math.random() * k);
        }
    }
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    Vector.prototype.add = function (v1) {
        var arraySum = new Vector(this.elements.length, this.k);
        for (var i = 0; i < this.elements.length; i++) {
            arraySum.elements[i] = this.elements[i] + v1.elements[i];
        }
        return arraySum;
    };
    Vector.prototype.subs = function (v1) {
        var arraySub = new Vector(this.elements.length, this.k);
        for (var i = 0; i < this.elements.length; i++) {
            arraySub.elements[i] = this.elements[i] - v1.elements[i];
        }
        return arraySub;
    };
    Vector.prototype.mult = function (v1) {
        var arrayMult = new Vector(this.elements.length, this.k);
        for (var i = 0; i < this.elements.length; i++) {
            arrayMult.elements[i] = this.elements[i] * v1.elements[i];
        }
        return arrayMult;
    };
    Vector.prototype.multNumber = function (n) {
        var arrayProd = new Vector(this.elements.length, this.k);
        for (var i = 0; i < this.elements.length; i++) {
            arrayProd.elements[i] = this.elements[i] * n;
        }
        return arrayProd;
    };
    return Vector;
}());
exports.Vector = Vector;
// let array1 = new Vector(5,5);
// let arrayTotal = new Vector(5,5);
// console.log(array1);
// console.log(arrayTotal);
// array1.print();
// console.log(arrayTotal.add(array1));
// console.log(arrayTotal.subs(array1));
// console.log(arrayTotal.mult(array1));
// console.log(arrayTotal.multNumber(5));
