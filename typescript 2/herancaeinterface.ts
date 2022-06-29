interface ICRUD{
    salvar():boolean
    update(id:number):boolean
    delete(id:number):void
    consultar(id?:number):string
}

class Produtox{
    descricao:string = ''
    preco:number = 0
}

class Produtofinal extends Produtox implements ICRUD{
    consultar(id?:number):string{
        return`Consultando por ${id}`;
    }
    salvar(): boolean {
        throw new Error("Method not implemented.");
    }
    update(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }
    
}

let p1 = new Produtofinal()
p1.descricao='Feijoa'
p1.preco = 10
console.log(p1.consultar())

let p2 = new Produtofinal()
console.log(p2.consultar(10))