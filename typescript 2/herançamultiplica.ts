interface IAnimal{
    raça: string 
    especie: string
    barulho(x:string):void
}

interface IMamifero{
    quantidadeMamas:number
    getQtdeLeite():number
}

class Bicho implements IAnimal, IMamifero{
    raça: string = 'vaca';
    especie: string = 'vaca';
    quantidadeMamas: number = 4;
    getQtdeLeite(): number {
        return 10;
    }
    
    barulho(x: string): void {
        console.log(`Barulho de ${x}`)
    }

    display(){
        console.log(`Raça: ${this.raça}`)
        console.log(`Especie: ${this.especie}`)
        console.log(`Nº de mamas: ${this.quantidadeMamas}`)
    }
}

let bicho: Bicho
bicho = new Bicho()
bicho.barulho('Pocotó Pocotó')
bicho.display()
