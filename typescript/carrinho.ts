interface Icarrinho {
    id: number
    
}

interface produtos{
    qtd: number
    valor: number
    descricao: string
}

var carrinho: Icarrinho = {}

carrinho.produto = "arroz"
carrinho.qtd = 2
carrinho.valoremRS = 11

console.log(carrinho)