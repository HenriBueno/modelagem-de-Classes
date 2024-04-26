"use strict";
/*5. Faça um programa completo utilizando classes e métodos que:
a. Possua uma classe chamada BombaCombustivel, com no
mínimo esses atributos:
i. tipoCombustivel.
ii. valorLitro
iii. quantidadeCombustivel
b. Possua no mínimo esses métodos:
i. abastecerPorValor() – método onde é informado o
valor a ser abastecido e mostra a quantidade de litros
que foi colocada no veículo
ii. abastecerPorLitro() – método onde é informado a
quantidade em litros de combustível e mostra o valor a
ser pago pelo cliente.
iii. alterarValor() – altera o valor do litro do combustível.
iv. alterarCombustivel() – altera o tipo do combustível.
v. alterarQuantidadeCombustivel() – altera a
quantidade de combustível restante na bomba.

OBS: Sempre que acontecer um abastecimento é necessário
atualizar a quantidade de combustível total na bomba. Não deve ser
possível abastecer se não tiver gasolina suficiente na bomba.*/
class BombaCombustivel {
    constructor(tipoCombustivel, valorLitro, quantidadeCombustivel) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }
    abastecerPorValor(valor) {
        const novoValor = valor / this.valorLitro;
        if (this.quantidadeCombustivel > novoValor) {
            this.quantidadeCombustivel = this.quantidadeCombustivel - novoValor;
            console.log(`Você deve abastecer: ${novoValor} Litros`);
        }
        else {
            console.log(`Não há gasolina o suficiente para abastecer esta quantia, pois há somente: ${this.quantidadeCombustivel} Litros`);
        }
    }
    abastecerPorLitro(litro) {
        const novoValor = litro * this.valorLitro;
        if (this.quantidadeCombustivel > litro) {
            this.quantidadeCombustivel = this.quantidadeCombustivel - novoValor;
            console.log(`Você deve abastecer: ${litro} e deve pagar R$ ${novoValor}`);
        }
        else {
            console.log(`Não há gasolina o suficiente para abastecer esta quantia, pois há somente: ${this.quantidadeCombustivel} Litros`);
        }
    }
    alterarValor(novoValorLitro) {
        let valorAntigo = this.valorLitro;
        this.valorLitro = novoValorLitro;
        console.log(`Valor atualizado de R$ ${valorAntigo} para R$ ${this.valorLitro}`);
    }
    alterarQuantidadeCombustivel(novoValorCombustivel) {
        let valorAntigo = this.quantidadeCombustivel;
        this.quantidadeCombustivel = novoValorCombustivel;
        console.log(`Valor atualizado de ${valorAntigo} L para R$ ${this.quantidadeCombustivel} L`);
    }
    alterarCombustivel(novoCombustivel) {
        let valorAntigo = this.tipoCombustivel;
        this.tipoCombustivel = novoCombustivel;
        console.log(`Tipo de combustível atualizado de ${valorAntigo} para ${this.tipoCombustivel}`);
    }
}
const usuario = new BombaCombustivel("gasolina", 5, 250);
usuario.alterarCombustivel("aditivado");
