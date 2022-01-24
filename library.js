"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.toString = function () {
        var str = "";
        for (var i = 0; i < this.books.length; i++) {
            str += this.books[i].toString() + "\n";
        }
        return str;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var array = [];
        for (var i = 0; i < this.books.length; i++) {
            if (author == this.books[i].getAuthor()) {
                array.push(this.books[i]);
            }
        }
        return array;
    };
    return Library;
}());
exports.Library = Library;
// let libro1 = new Book("La mosca", 200, "0-7645-2641-3", "Quijote", "editmala");
// // console.log(libro1);
// let libro2 = new Book("La mosca", 200, "0-7645-2641-3", "Manchado", "editmala");
// let libro3 = new Book("La mosca", 200, "0-7645-2641-3", "Quijote", "editmala");
// let libreria1 = new Library([libro1,libro2,libro3], "direccionLibreria", "pepito de los palotes");
// // console.log(libreria1)
// // console.log(libreria1.toString());
// console.log(libreria1.getNumberOfBooks());
// console.log(libreria1.findByAuthor("Quijote"))
