interface Icarrinho{
    produto: string
    valoremRS: number
    qtd: number
}

var carrinho: Icarrinho ={produto:'', valoremRS:0, qtd:0}

carrinho.produto = "arroz"
carrinho.qtd = 2
carrinho.valoremRS = 11