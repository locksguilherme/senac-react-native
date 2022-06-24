class Veículo {
    placa: string = ''
    marca: string = ''
    modelo: String = ''

    constructor(placa: string, marca: string, modelo: string) {
        this.placa = placa
        this.marca = marca
        this.modelo = modelo
    }
    display(): void {
        console.log(`Placa: ${this.placa}`)
        console.log(`Marca: ${this.marca}`)
        console.log(`Modelo: ${this.modelo}`)
    }
}

let carro = new Veículo('abc-1234', 'honda', 'civic')
carro.display()

class Moto extends Veículo {
    cilindradas: number = 160
    display():void{
        super.display()
        console.log(`Cilindradas: ${this.cilindradas}`)
    }
}

let moto = new Moto('def-3456','honda','broz')
moto.display()