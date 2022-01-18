class Person
{

    constructor(nombre, apellido1, altura, peso, yearOfBirth,hobbies )
    {
        this.nombre=nombre;
        this.apellido1=apellido1;
        this.yearOfBirth=yearOfBirth;
        this.apellido2;
        this.altura=altura;
        this.peso=peso;
        this.hobbies =hobbies;
        this.colorOjos;
        this.colorPelo;
        this.tatuajes;
  
    

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

    printAll()
    {
        return ("Nombre: " + this.nombre + " -" + " Apellido: " + this.apellido1 + " -" + 
                    " altura: " + this.altura + " -" + " peso: " + this.peso + " -" +
                    " Año de nacimiento: " + this.yearOfBirth)
    }

    printHobbies()
    {
         return ("Hobbies: " + this.hobbies)
    }


}

// Bloque Main
// let hobbies = ["comer", "jugar"];
// let persona1 = new Person("Juan","Garrido",180,90,1982,);
// console.log(persona1.calcularIMC());
// console.log(persona1.printAll());
// console.log(persona1.printHobbies());

module.exports = Person;