class Pessoa {
    id: number
    nome: string;
    fone: string
    email: string
    peso: number
    altura: number

    constructor(id: number, nome: string, fone: string, email: string, peso: number, altura: number) {
        this.id = id
        this.nome = nome
        this.fone = fone
        this.email = email
        this.peso = peso
        this.altura = altura
    }

    imprimir(){
        console.log(`Id: ${this.id}`)
        console.log(`Nome: ${this.nome}`)
        console.log(`Fone: ${this.fone}`)
        console.log(`Email: ${this.email}`)
        console.log(`IMC: ${this.imc()}`)
        console.log('')
        /*if (this.id || this.nome || this.fone || this.email == null) {
            return false
        } else {
            return true
        }*/
    }

    /*validacao() {
        console.log(`Dados validados com sucesso!!!`)
        if (this.id || this.nome || this.fone || this.email == null) {
            return false
        }
    }*/
    imc(): number{
        return this.peso / (this.altura*this.altura)
    }
}

export default Pessoa
