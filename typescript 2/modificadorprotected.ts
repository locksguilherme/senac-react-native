class Pessoa{
    nome: string =''
    idade: number = 0
    protected identificador: number =0

    setIdentificador(id:number): void{
        this.identificador = id
    }
    setidade(id:number):void{
        this.idade = id
    }
}
let pessoa: Pessoa
pessoa = new Pessoa()
pessoa.nome = 'joao'
pessoa.setIdentificador(1000)
console.log(pessoa)

class Aluno extends Pessoa{
    média:number=0
    
}
let aluno = new Aluno()
aluno.média = 10
aluno.setIdentificador(125)
aluno.setidade(15)
console.log(aluno)
