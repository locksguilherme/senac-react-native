"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empregado {
    constructor(nome, valorHora, totalHoraSemanal) {
        this.nome = nome;
        this.valorHora = valorHora;
        this.totalHoraSemanal = totalHoraSemanal;
    }
    calcularSalario() {
        return this.valorHora * this.totalHoraSemanal;
    }
    imprimeDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Valor R$: ${this.valorHora}`);
        console.log(`Horas Semanais: ${this.totalHoraSemanal}`);
        console.log(`Salario R$: ${this.calcularSalario()}`);
    }
}
exports.default = Empregado;
