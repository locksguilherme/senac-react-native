function ola(){
    console.log('ola')
}

function tchau(){
    console.log('tchau')
}

function conversa(){
   console.log('Tudo bem?')
}

function discussao(){
    console.log('asniuasuifaf')
}

function conversao(){
    console.log('conversa muito longa')
}

function testeSettimeout(callback, time){
    setTimeout(callback,time)
}

ola()
testeSettimeout(conversa, 10000)
testeSettimeout(discussao, 7000)
testeSettimeout(conversao, 3000)
tchau()