"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.getPages = function () {
        return this.nPages;
    };
    Book.prototype.setPages = function (title) {
        this.nPages = title;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.setIsbn = function (isbn) {
        this.isbn = isbn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Book.prototype.toString = function () {
        var str = "\"Title - " + this.getTitle() +
            "\nNumer of Pages - " + this.getPages() +
            "\nISBN - " + this.getIsbn() +
            "\nAuthor - " + this.getAuthor() +
            "\nEditorial - " + this.getEditorial() + "\"";
        return str;
    };
    return Book;
}());
exports.Book = Book;
