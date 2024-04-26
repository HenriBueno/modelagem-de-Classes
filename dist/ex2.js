"use strict";
/*2. Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material
b. Métodos
i. Trocar Cor
ii. Mostrar cor*/
class Bola {
    constructor(cor, circunferencia, material) {
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }
    trocarCor(novaCor) {
        this.cor = novaCor;
    }
    mostrarCor() {
        console.log(this.cor);
    }
}
const bolinha = new Bola("vermelho", 33, "borracha");
bolinha.trocarCor("azul");
bolinha.mostrarCor();
