class animais {
    filo: string
    reino: string

    constructor(filo: string, reino: string) {
        this.filo = filo
        this.reino = reino
    }
}
class repteis extends animais {
    especie: string
    nmrdentes: string

    constructor(especie: string, nrmdentes: string, filo: string, reino: string) {
        super(filo, reino)
        this.especie = especie
        this.nmrdentes = nrmdentes
    }
}
class mamiferos extends animais {
    especie: string
    pelagem: string

    constructor(especie: string, pelagem: string, filo: string, reino: string) {
        super(filo, reino)
        this.pelagem = pelagem
        this.especie = especie
    }
}

let animal: animais
animal = new mamiferos('cachorro', 'pelo escuro e preto', 'mamifero', 'animalia')

console.log(animal)
