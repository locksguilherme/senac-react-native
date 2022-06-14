var anoAtual = 2022 //notação do camelo ou camel case
var anoNascimento = 2000

var mesNascimento = 5
var mesAtual = 4

var diaNascimento = 28
var diaAtual = 26

var idade = anoAtual - anoNascimento

if(mesAtual < mesNascimento){
    idade--
}


if(mesAtual == mesNascimento){
    if(diaAtual < diaNascimento)
    idade--
}
console.log(idade)

