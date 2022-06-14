var arroz = {
    descricao: 'saco de arroz 1kg',
    preco: 31.9,
    qntd: 2,
    subtotal: function () {
        return this.qntd * this.preco
    }
}

var feijao = {
    descricao: 'pacote de feijão 1kg',
    preco: 13,
    qntd: 2,
    subtotal: function () {
        return this.qntd * this.preco
    }
}
var refrigerante = {
    descricao: 'refrigerante fanta 2l',
    preco: 5.95,
    qntd: 1,
    subtotal: function () {
        return this.qntd * this.preco
    }
}

var peixe = {
    descricao: 'file de tilapia 800g',
    preco: 42.90,
    qntd: 2,
    subtotal: function () {
        return this.qntd * this.preco
    }
}
var macarrao = {
    descricao: 'macarrao com ovo 500g',
    preco: 3.29,
    qntd: 2,
    subtotal: function () {
        return this.qntd * this.preco
    }
}
/**var carrinho = [arroz.subtotal(), feijão.subtotal(), refrigerante.subtotal(), peixe.subtotal(), macarrao.subtotal()]

var total = [arroz, feijão, refrigerante, peixe, macarrao]
var soma = 0
for (let i = 0; i < total.length; i++) {
    soma = soma + total[i].subtotal()
}
console.log(soma)*/

var carrinho = []
carrinho.push(arroz)
carrinho.push(feijao)
carrinho.push(refrigerante)
carrinho.push(peixe)
carrinho.push(macarrao)

let i = 0;
let total = 0;
while (i < carrinho.length) {
    total += carrinho[i].subtotal()
    i++
}
console.log(total.toFixed(2))



