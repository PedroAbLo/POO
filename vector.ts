export class Vector
{

    private elements: number[];
    public n:number;
    public k:number;

    constructor(n:number, k:number){

        this.n = n;
        this.k = k;
        this.elements = new Array(n);

        for(let i = 0; i < this.elements.length; i++){
            this.elements[i] = Math.round(Math.random()*k);
        }
        
    }


    public print():void{
    
        console.log(this.elements);
        
    }

    public add(v1:Vector):Vector{
        let arraySum:Vector= new Vector(this.elements.length,this.k);
        for(let i=0; i< this.elements.length; i++){
            arraySum.elements[i]= this.elements[i] + v1.elements[i];
        }
        return arraySum;
    }

    public subs(v1:Vector):Vector{
        let arraySub:Vector= new Vector(this.elements.length, this.k);                            
        for(let i=0; i< this.elements.length; i++){
            arraySub.elements[i] = this.elements[i] - v1.elements[i]
        }
        return arraySub;

    }

    public mult(v1:Vector):Vector{
        let arrayMult=new Vector(this.elements.length, this.k);
        for(let i=0; i< this.elements.length; i++){
            arrayMult.elements[i] = this.elements[i] * v1.elements[i]
        }
        return arrayMult;
    }

    public multNumber(n:number):Vector{
        let arrayProd= new Vector(this.elements.length, this.k);
        for(let i=0; i< this.elements.length; i++){
            arrayProd.elements[i] = this.elements[i] * n;
        }
        return arrayProd;

    }




}

// let array1 = new Vector(5,5);
// let arrayTotal = new Vector(5,5);

// console.log(array1);
// console.log(arrayTotal);
// array1.print();
// console.log(arrayTotal.add(array1));
// console.log(arrayTotal.subs(array1));
// console.log(arrayTotal.mult(array1));
// console.log(arrayTotal.multNumber(5));

