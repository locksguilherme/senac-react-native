
var x = function (imc) {
    console.log(`Seu IMC é ${imc}`)   

    if(imc < 18.5)
    console.log(`Você está em estado de magresa`)

    if(imc >= 18.5 & imc < 25){
        console.log(`Normal`)
    }else if(imc >=25 & imc <30){
        console.log(`Sobrepeso`)
    }else if(imc >=30 & imc <35){
        console.log(`Obesidade grau 1`)
    }else if(imc >=35 & imc <40){
        console.log(`Obesidade grau 2`)
    }else if(imc >=40){
        console.log(`Obesidade grau 3`)
    }
}
x(74/ (1.88^2) )


