"use strict";
class Pessoa {
    constructor() {
        this.nome = '';
        this.idade = 0;
        this.identificador = 0;
    }
    setIdentificador(id) {
        this.identificador = id;
    }
    setidade(id) {
        this.idade = id;
    }
}
let pessoa;
pessoa = new Pessoa();
pessoa.nome = 'joao';
pessoa.setIdentificador(1000);
console.log(pessoa);
class Aluno extends Pessoa {
    constructor() {
        super(...arguments);
        this.média = 0;
    }
}
let aluno = new Aluno();
aluno.média = 10;
aluno.setIdentificador(125);
aluno.setidade(15);
console.log(aluno);
