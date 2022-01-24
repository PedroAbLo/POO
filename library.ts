
import { Book } from "./book";


export class Library
{

    private books : Book[];
    private address : string;
    private manager : string;

    constructor(books:Book[], address:string, manager:string){
        this.books=books;
        this.address=address;
        this.manager=manager;
    }

    public getAddress():string{
        return this.address;
    }
    public setAddress(address):void{
        this.address=address;
    }

    public getManager():string{
        return this.manager;
    }
    public setManager(manager):void{
        this.manager = manager;
    }


    public toString():string{
        
        let str:string= "";

        for(let i=0; i< this.books.length; i++){
            str += this.books[i].toString() +"\n";
            }
        return str;
    }
    

    public getNumberOfBooks():number{
        
        return this.books.length;
    }

    public findByAuthor(author:string):Book[]{
        
        let array:Book[] = [];
        for(let i=0; i< this.books.length;i++){
            if(author == this.books[i].getAuthor()){
                array.push(this.books[i])
                
            }
        }
        return array;
    }
    

}

// let libro1 = new Book("La mosca", 200, "0-7645-2641-3", "Quijote", "editmala");
// // console.log(libro1);
// let libro2 = new Book("La mosca", 200, "0-7645-2641-3", "Manchado", "editmala");
// let libro3 = new Book("La mosca", 200, "0-7645-2641-3", "Quijote", "editmala");
// let libreria1 = new Library([libro1,libro2,libro3], "direccionLibreria", "pepito de los palotes");
// // console.log(libreria1)
// // console.log(libreria1.toString());
// console.log(libreria1.getNumberOfBooks());
// console.log(libreria1.findByAuthor("Quijote"))

