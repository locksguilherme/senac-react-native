var numeros = [2, 1, 10, 5, 50, 60, 800, 7, -45]
/**  numeros = [0] > numeros[1]
  aux = numeros[0]

  numeros=[0] > numeros[1]
  numeros[1] = aux*/

var trocou = true
while(trocou){
    trocou = false
    for (let i = 0; i < numeros.length; i++) {
        /**numeros.sort(function(a, b){return a - b})*/
        if (numeros[i] > numeros[i + 1]){
            let aux = numeros[i]
            numeros[i] = numeros[i+1]
            numeros[i+1] = aux
            trocou = true
        }
    }
}


console.log(numeros.toString())
