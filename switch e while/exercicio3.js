var nome = "guilherme"
var nota1 = 8
var nota2 = 9
var nota3 = 7

var media = (nota1 + nota2 + nota3)/3

if(media >= 7){
    console.log(`${nome}, sua média e ${media}, você esta aprovado`)
}

if(media < 7){
    console.log(`${nome}, sua média é ${media}, você está reprovado`)
}