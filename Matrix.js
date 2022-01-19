const LibVector = require ("./vector");
class Matrix{

    constructor(n,m,k){
        
        this.matriz = new Array();
        for(i=0 ; i < n ; i++){
            this.matriz[i]=new Array();
            for(j=0 ; j < m ; j++){
               this.matriz[i][j] = Math.round(Math.random()*k);
            }
        }
    }

    add(m){
        if(m.length === this.matriz.length && m[0].length === this.matriz[0].length){
            let matrizSum = [];
            for(i=0; i<m.length;i++){
                matrizSum[i] = [];
                for(j=0;j<m[i].length;j++){
                    matrizSum[i][j] = this.matriz[i][j] + m[i][j];
                }
            }
            return matrizSum;
        }   
        return "No cumple las condiciones";
    }

    subs(m){
        let matrizSub = [];
        if(m.length === this.matriz.length && m[0].length=== this.matriz[0].length){
            for(i=0; i<m.length;i++){
                matrizSub[i] = [];
                for(j=0;j<m[i].length;j++){
                    matrizSub[i][j] = this.matriz[i][j] - m[i][j];
                }
            }
            return matrizSub;
        }
        return "No cumple las condiciones";
    }

    producto(m){
        if(m.length === this.matriz.length && m[0].length === this.matriz[0].length){
            let matrizPro = [];
            for(i=0; i<m.length;i++){
                matrizPro[i] = [];
                for(j=0;j<m[i].length;j++){
                    matrizPro[i][j] = this.matriz[i][j] * m[i][j];
                }
            }
            return matrizPro;
        }
        return "No cumple las condiciones";
    }

    productoNum(n){
        let matrizNum = [];
        for(i=0; i < this.matriz.length; i++){
            matrizNum[i] = [];
            for(j=0; j < this.matriz[i].length;j++){
                matrizNum[i][j] = this.matriz[i][j] *n;
            }
        }
        return matrizNum;
    }
}


let mat = [];
    for(i=0; i < 4 ; i++){
            mat[i] = [];
        for(j=0; j  < 4 ; j++){
            mat[i][j] = Math.round(Math.random()*5);
        }
    }

console.log(mat);
let matriz = new Matrix(4,4,5)
// let array1 = new LibVector(4,5);
// let array2 = new LibVector(4,5);
// let array3 = new LibVector(4,5);
// let array4 = new LibVector(4,5);
// let matriz1= new Matrix();


console.log(matriz.productoNum(5));
console.log(matriz.add(mat));
console.log(matriz.producto(mat));
console.log(matriz.subs(mat));
console.log(matriz.add(mat));
