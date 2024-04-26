"use strict";
/*6. Implemente uma classe chamada Carro com as seguintes
propriedades:
a. Um veículo tem um certo consumo de combustível (medidos
em km / litro) e uma certa quantidade de combustível no
tanque.
b. O consumo é especificado no construtor e o nível de
combustível inicial é 0.
c. Forneça um método andar() que simula o ato de dirigir o
veículo por uma certa distância, reduzindo o nível de
combustível no tanque de gasolina.
d. Forneça um método obterGasolina(), que retorna o nível atual
de combustível e forneça um método adicionarGasolina(),
para abastecer o tanque.*/
class Carro {
    constructor(consumo = 0) {
        this.consumo = consumo;
        this.qtdCombustivel = 0;
    }
    andar(distância) {
        let distânciaGarantida = this.qtdCombustivel * this.consumo;
        if (distânciaGarantida < distância) {
            console.log(`Não há combustível o suficiente para andar os ${distância} km.`);
        }
        else {
            this.qtdCombustivel = this.qtdCombustivel - (distância / this.consumo);
            console.log(`O valor atualizado do combustível é de ${this.qtdCombustivel}`);
        }
    }
    obterGasolina() {
        console.log(`O nível atual d gasolina é: ${this.qtdCombustivel} Litros`);
    }
    adicionarGasolina(quantiaGasolina) {
        let valorAntigo = this.qtdCombustivel;
        this.qtdCombustivel = this.qtdCombustivel + quantiaGasolina;
        console.log(`Nível de gasolina atualizada de ${valorAntigo} Litros para ${this.qtdCombustivel}`);
    }
}
const meuFusca = new Carro(10);
meuFusca.adicionarGasolina(20);
meuFusca.andar(100);
meuFusca.obterGasolina();
