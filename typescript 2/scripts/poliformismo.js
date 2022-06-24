"use strict";
class Veículo {
    constructor(placa, marca, modelo) {
        this.placa = '';
        this.marca = '';
        this.modelo = '';
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
    }
    display() {
        console.log(`Placa: ${this.placa}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
    }
}
let carro = new Veículo('abc-1234', 'honda', 'civic');
carro.display();
class Moto extends Veículo {
    constructor() {
        super(...arguments);
        this.cilindradas = 160;
    }
    display() {
        super.display();
        console.log(`Cilindradas: ${this.cilindradas}`);
    }
}
let moto = new Moto('def-3456', 'honda', 'broz');
moto.display();
