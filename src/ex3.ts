/*3. Crie uma classe para implementar uma conta corrente. A classe
deve possuir os seguintes atributos:
a. Número da conta
b. Nome do correntista
c. Saldo
Os métodos são os seguintes:
a) Alterar nome
b) Deposito
c) Saque
No construtor, o saldo é opcional, com valor padrão zero e os
demais atributos são obrigatórios. A conta não pode ficar com saldo
negativo.*/

class Santander {
    
    id:number
    numero:number
    nome:string
    saldo:number 


    constructor(numero:number, nome:string, saldo = 0){
        this.numero = numero
        this.nome = nome
        this.saldo = saldo
        this.id = Santander.proximoId++
        
        
    }
    private static proximoId = 1;

    alterarNome(novoNome:string){
        this.nome = novoNome
    }
    depositar(deposito:number){
        this.saldo = this.saldo + deposito
        console.log(this.saldo)
    }
    sacar(saque:number){
        
        if(this.saldo == 0){
            console.log("Você está com o saldo zerado")
        }
        else if(this.saldo - saque < 0) {
            console.log("Seu saldo ficará negativo")
        }
        else{
            this.saldo = this.saldo - saque
            console.log(`Você realizou o saque de: ${saque}`)
            console.log(`Seu saldo atual é: ${this.saldo}`)
        }
    }
}
const usuario1 = new Santander(40028922,"henrique",1000)
const usuario2 = new Santander(20020202,"Dionata",500)
const usuario3 = new Santander(52648978,"Mateus",200)

console.log(usuario1, usuario2, usuario3)