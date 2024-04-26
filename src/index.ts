/*1. Crie uma classe Contador, que encapsule um valor usado para
contagem de itens ou eventos. A classe deve oferecer métodos que
devem:
a) Zerar;
b) Incrementar;
c) Retornar o valor do contador.*/

class Contador {
    numero: number

    constructor(numero: number){
        this.numero = numero
    }

    zerar(){
        this.numero = 0
    }
    incrementar(){
        this.numero ++
    }
    imprimir(){
        console.log(this.numero)
    }
}

let numero1 = new Contador (10)
numero1.imprimir()
console.log(numero1)

