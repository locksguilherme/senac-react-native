interface Icarrinho {
    id: number
    produto:[{
        qtd:number
        valor:number
        decricao:string
    }]
    
}

/*interface produtos{
    qtd: number
    valor: number
    descricao: string
}*/

var carrinho: Icarrinho = {id:1,produto:[{qtd:2,valor:29,descricao:arrozbranco;}]}



console.log(carrinho)