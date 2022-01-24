export class Book
{

    private title:string;
    private nPages:number;
    private isbn:string;
    private author:string;
    private editorial:string;


    constructor(title:string, nPages:number, isbn:string, author:string, editorial:string){
        this.title=title;
        this.nPages=nPages;
        this.isbn=isbn;
        this.author=author;
        this.editorial=editorial;
    }

    public getTitle():string{
        return this.title;
    }
    public setTitle(title:string){
        this.title = title;
    }

    public getPages():number{
        return this.nPages;
    }
    public setPages(title:number){
        this.nPages = title;
    }

    public getIsbn():string{
        return this.isbn;
    }
    public setIsbn(isbn:string){
        this.isbn = isbn;
    }

    public getAuthor():string{
        return this.author;
    }
    public setAuthor(author:string){
        this.author = author;
    }

    public getEditorial():string{
        return this.editorial;
    }
    public setEditorial(editorial:string){
        this.editorial = editorial;
    }


    public toString():string{
        let str:string = "\"Title - " + this.getTitle() +
         "\nNumer of Pages - " + this.getPages() +
         "\nISBN - " + this.getIsbn() +
         "\nAuthor - " + this.getAuthor() +
         "\nEditorial - " + this.getEditorial() +"\"";
         return str;
         
    }



}



