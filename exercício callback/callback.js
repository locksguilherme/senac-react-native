function um(){
    console.log("um")
}
function dois(){
    console.log("dois")
}

um()
dois()

function mostraResultado(result){
    console.log(`Resultado: ${result}`)
}

function mostraResultado2(result){
    console.log(`Resultado2: ${result}`)
}

function mostraResultado3(result){
    console.log(`Resultado3: ${result}`)
}

function soma(n1, n2){
    let resultado = n1 + n2
    mostraResultado(resultado)
}

soma(10,20)

/**Função usando callback */
function soma2(n1, n2, callback){
    let resultado = n1 + n2
    callback(resultado)
}

soma2(100, 200, mostraResultado)
soma2(100, 250, mostraResultado2)
soma2(2000, 5, mostraResultado3)