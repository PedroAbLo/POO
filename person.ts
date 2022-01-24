export class Person
{
    //Declaracion atributos
    public name : string;
    public age : number;
    private address : string;



    //Implementación método constructor

    constructor(name:string, age:number, address:string ){

        this.name = name;
        this.age = age;
        this.address = address;

    }

    //Implementación métodos públicos

    public printName():void{
        
        console.log(this.name);
    }

    public yearOfBirth(currentYear:number):number{

        return currentYear - this.age;

    }

    public setAddress(address:string):void{

        this.address = address;
    }

    public getAddress():string{
        
        return this.address;
    }



}