class Product{
    id:number
    descricao:string
    preco:number
    constructor(id:number,descricao:string,preco:number){
        this.id = id
        this.descricao = descricao
        this.preco = preco
    }
}

let prod1 = new Product(1,'feijao',89)
let prod2 = new Product(2,'arroz',90)

class ItemVenda{
    id:number
    produto: Product
    qtde: number
    constructor(id:number, produto:Product, qtde: number){
        this.id= id
        this.produto= produto
        this.qtde= qtde
    }
}
let it1 = new ItemVenda(1,prod1,10)
let it2 = new ItemVenda(2,prod2,11)

//console.log(it1)
//console.log(it2)


class venda{
    id:number
    itens:ItemVenda[]

    constructor(id:number, itens: ItemVenda[]){
        this.id = id
        this.itens = itens
    }
}

let item1 = new venda (1,[it1])
console.log(item1)