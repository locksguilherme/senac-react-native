/** 10 5 50 60 800 15 */
var numeros = [10, 5, 50, 60, 800, 15, -1]
var menor = numeros[0]
var maior = numeros[0]

for(let i = 1; i < numeros.length; i++){
    if(numeros[i] < menor)
       menor = numeros[i]
    
    if(numeros[i] > maior)
      maior = numeros[i]
}  

console.log(`menor numero: ${menor}`)
console.log(`maior numero: ${maior}`)

