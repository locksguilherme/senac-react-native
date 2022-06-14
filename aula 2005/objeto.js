var carro = {
    placa: "abc-1234",
    marca: "wolksvagen",
    modelo: "gol",
    cor: "vermelha",
    autonomia: function (km, abastecimento) {
        console.log((km / abastecimento).toFixed(2))
    }
}

console.log(carro)
console.log(carro.placa)
carro.cor = "preto"
console.log(carro)
carro.autonomia(500, 15)