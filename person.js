class Person
{

    constructor(nombre, apellido1, altura, peso, yearOfBirth,hobbies)
    {
        this.nombre=nombre;
        this.apellido1=apellido1;
        this.yearOfBirth=yearOfBirth;
        // this.apellido2;
        this.altura=altura;
        this.peso=peso;
        this.hobbies = hobbies;
        this.edad = edad(yearOfBirth)
        // this.colorOjos;
        // this.colorPelo;
        // this.tatuajes;
    }
    
    calcularIMC()
    {
        return this.peso / (this.altura*this.altura)
    }

    edad()
    {
        let numeroEdad= 2022 - this.yearOfBirth
        return numeroEdad;
    }

    printAll(person)
    {
        for(const atributo in person){
            console.log("El atributo: " + atributo + ", su valor es : " + person[atributo])
            
        }
       
        
    }

    printHobbies()
    {
        for(let i = 0; i<this.hobbies.length;i++){
            console.log(this.hobbies[i]);
        }
    }


}

// Bloque Main
let hobbies = ["comer", "jugar"];
let persona1 = new Person("Juan","Garrido",180,90,1982,hobbies);
// console.log(persona1.calcularIMC());
persona1.printAll(persona1);
// console.log(persona1.printHobbies());

module.exports = Person;