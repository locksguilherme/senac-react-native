var continuar = true
var opcao = "s"
/*
while(continuar){
    console.log('ola')
    continuar = opcao == "s"
    continuar = (opcao.toLocaleLowerCase() == "s")
}
*/
var contador = 5
while(opcao.toLocaleLowerCase() == 's'){
    if(contador > 0){
        console.log(`ola ${contador}`)
    }
    else{
        opcao = "n"
    }
    console.log('ola')
}

console.log("continuar execução")