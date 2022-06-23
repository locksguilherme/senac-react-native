class animais{
     classe: string
     reino: string

     constructor(classe: string, reino: string){
        this.classe = classe
        this.reino = reino
     }
} 
class repteis extends animais{
    especie: string
    nmrdentes: string

    constructor(especie: string, nrmdentes: string, classe: string, reino: string){
        super(classe, reino)
        this.especie = especie
        this.nmrdentes =  nrmdentes
    }
}
class mamiferos extends animais{
    especie: string
    pelagem: string

    constructor(especie: string, pelagem: string, classe: string, reino: string){
        super(classe, reino)
        this.pelagem = pelagem
        this.especie = especie
    }
}

let animal: animais
animal = new animais('cachorro', 'mamifero',)
