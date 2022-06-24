"use strict";
class animais {
    constructor(filo, reino) {
        this.filo = filo;
        this.reino = reino;
    }
}
class repteis extends animais {
    constructor(especie, nrmdentes, filo, reino) {
        super(filo, reino);
        this.especie = especie;
        this.nmrdentes = nrmdentes;
    }
}
class mamiferos extends animais {
    constructor(especie, pelagem, filo, reino) {
        super(filo, reino);
        this.pelagem = pelagem;
        this.especie = especie;
    }
}
let animal;
animal = new mamiferos('cachorro', 'pelo escuro e preto', 'mamifero', 'animalia');
console.log(animal);
