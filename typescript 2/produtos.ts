class produtos {
    descricao: string
    valorunitario: number
    qtdeestoque: number

    constructor(descricao: string, valorunitario: number, qrtdeestoque: number) {
        this.descricao = descricao
        this.valorunitario = valorunitario
        this.qtdeestoque = qrtdeestoque
    }

    getEstoque(){
        console.log(`A quantidade presente no estoque é de ${this.qtdeestoque}`)
        console.log(`O preço com desconto é ${this.preçocomdesconto
        } e com acréssimo é ${this.preçocomacrescimo}`)
    }

    preçocomdesconto(taxa: number): number{
        var taxa = taxa/100
        return this.valorunitario - (this.valorunitario * taxa)
    }

    preçocomacrescimo(taxa: number): number{
        var taxa = taxa/100
        return this.valorunitario + (this.valorunitario * taxa)
    }

    imprimirdados(){
        console.log(`O seu produto é ${this.descricao}`)
        console.log(`O valor por unidade é ${this.valorunitario}`)
        console.log(`A quantidade presente no estoque é ${this.qtdeestoque}`)
        console.log(`O valor com desconto é ${this.preçocomdesconto(14).toFixed(2)}`)
        console.log(`O valor com acréssimo é ${this.preçocomacrescimo(7).toFixed(2)}`)
    }
}
export default produtos