"use strict";
class Bicho {
    constructor() {
        this.raça = 'vaca';
        this.especie = 'vaca';
        this.quantidadeMamas = 4;
    }
    getQtdeLeite() {
        return 10;
    }
    barulho(x) {
        console.log(`Barulho de ${x}`);
    }
    display() {
        console.log(`Raça: ${this.raça}`);
        console.log(`Especie: ${this.especie}`);
        console.log(`Nº de mamas: ${this.quantidadeMamas}`);
    }
}
let bicho;
bicho = new Bicho();
bicho.barulho('Pocotó Pocotó');
bicho.display();
