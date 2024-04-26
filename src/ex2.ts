/*2. Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material
b. Métodos
i. Trocar Cor
ii. Mostrar cor*/

class Bola {
    cor:string
    circunferencia:number
    material:string

    constructor(cor:string, circunferencia:number,material:string){
        this.cor = cor
        this.circunferencia = circunferencia
        this.material = material
    }

    trocarCor(novaCor:string){
        this.cor = novaCor
    }
    mostrarCor(){
        console.log(this.cor)
    }
}

const bolinha = new Bola ("vermelho", 33, "borracha")

bolinha.trocarCor("azul")
bolinha.mostrarCor()
