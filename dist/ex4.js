"use strict";
/*4. Crie uma classe para representar uma Calculadora. Esta classe
deve conter um atributo que servirá para armazenar o histórico das
operações e seus respectivos resultados.
a. Esta classe deve conter as operações de somar, multiplicar,
dividir e diminuir.
b. Esta classe deve iniciar com o histórico vazio
c. Esta classe deve conter uma ação para visualizar o histórico.*/
class Calculadora {
    constructor() {
        this.historico = [];
    }
    somar(numero1, numero2) {
        const soma = numero1 + numero2;
        this.historico.push(`${numero1}+${numero2}=${soma}`);
    }
    subtrair(numero1, numero2) {
        const subtracao = numero1 - numero2;
        this.historico.push(`${numero1}-${numero2}=${subtracao}`);
    }
    multiplicar(numero1, numero2) {
        const multiplicacao = numero1 * numero2;
        this.historico.push(`${numero1}x${numero2}=${multiplicacao}`);
    }
    dividir(numero1, numero2) {
        const divisao = numero1 / numero2;
        this.historico.push(`${numero1}/${numero2}=${divisao}`);
    }
    imprimirHistorico() {
        console.log(this.historico);
    }
    limparHistorico() {
        this.historico = [];
    }
}
const conta1 = new Calculadora();
conta1.somar(2, 4);
conta1.subtrair(20, 6);
conta1.dividir(50, 10);
conta1.multiplicar(100, 2);
conta1.imprimirHistorico();
