class Empregado {
    nome: String
    valorHora: number
    totalHoraSemanal: number

    constructor(nome: string, valorHora: number, totalHoraSemanal: number) {
        this.nome = nome
        this.valorHora = valorHora
        this.totalHoraSemanal = totalHoraSemanal
    }

    calcularSalario(): number{
        return this.valorHora * this.totalHoraSemanal
    }

    imprimeDados(): void{
        console.log(`Nome: ${this.nome}`)
        console.log(`Valor R$: ${this.valorHora}`)
        console.log(`Horas Semanais: ${this.totalHoraSemanal}`)
        console.log(`Salario R$: ${this.calcularSalario()}`)
    }
}

export default Empregado