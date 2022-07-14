/*const http = require('http');



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Meu servidor node');
});

server.listen(8080, "localhost", () => {
  console.log(`Rodando em http://localhost:8080/`);
});*/

const express = require('express')
const app = express()
cliente = [
    {
        id: 1,
        nome: "jose",
        email: "jose@gmail.com"
    },
    {
        id: 2,
        nome: "jose2",
        email:"jose2@gmail.com"
    }
]



app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/cadastro/cliente', (req, res) => {
    res.send('voce esta na pagina cadastro de cliente')
})

app.get('/consultar', (req, res) => {
    res.send(cliente)
})

app.get('/2', (req, res) => {
    res.send('voce esta na pagina cadastro de cliente')
})

app.get('/3', (req, res) => {
    res.send('voce esta na pagina cadastro de cliente')
})

app.listen(8080, () => {
    console.log('Executando em http://localhost:8080')
})