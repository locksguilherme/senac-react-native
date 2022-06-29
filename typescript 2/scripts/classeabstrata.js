"use strict";
class Computador {
    constructor() {
        this.memoria = 4;
    }
    display() {
        console.log(this.memoria);
    }
}
class Notebook extends Computador {
    getCapacidadeProcessamento() {
        return 500;
    }
}
let cp1 = new Notebook();
