"use strict";
function dados(p1, p2) {
    let vetor = [];
    vetor.push(p1);
    vetor.push(p2);
    return vetor;
}
let numeros = dados(10, 20);
numeros.push(50);
console.log(numeros);
let frutas = dados('laranja', 'banana');
frutas.push('morango');
console.log(frutas);
function base(n1, n2) {
    console.log(`${n1}, ${n2}`);
}
let boletim = base('José', 7);
let func1 = base('jose', true);
let func2 = base('pedro', false);
