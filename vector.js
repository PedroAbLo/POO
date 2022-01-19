class Vector{
    constructor(n,m){
        this.array = [];
        for(let i = 0; i<n; i++){
            this.array[i]= Math.round(Math.random()*m);
        }
    }

    add(a){
        if(a.length === this.array.length){
            let sumArray = [];
            for(let i = 0; i< a.length; i++){
                sumArray[i] = a[i] + this.array[i];
            }
            return sumArray;
        }else {
            return "No cumple la condicion"
        }
    }

    

    productoNum(n){
        let arrayPro = [];
        for(let i = 0; i < this.array.length; i++){
            arrayPro[i] = this.array[i] * n;
        }
        return arrayPro;

    }

    subs(a){
        if(a.length === this.array.length){
            let subArray = [];
            for(let i = 0; i< a.length; i++){
                subArray[i] = a[i] - this.array[i];
            }
            return subArray;
        }else {
            return "No cumple la condicion"
        }
    }

    producto(a){
        if(a.length === this.array.length){
            let proArray = [];
            for(let i = 0; i< a.length; i++){
                proArray[i] = a[i] * this.array[i];
            }
            return proArray;
        }else {
            return "No cumple la condicion"
        }
    }

}

let array = new Vector(4,5);


let a = [];
for(let i = 0; i < 4; i++){
    a[i] = Math.round(Math.random()*5);
}

console.log(a);
console.log(array.add(a));

module.exports = {Vector};