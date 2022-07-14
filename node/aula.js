const express = require('express');
const { release } = require('os');
const app = express()
var pg = require('pg');
const { send } = require('process');
const cors = require


var conString = "postgres://postgres:123456@localhost/estacionamento";

const pool = new pg.Pool({ connectionString: conString })

app.get('/conectar', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.Status(401).send({
                message: "erro de conexão",
                error: err.message
            })
        }
        return res.Status(200).send({
            message: "conectado com sucesso"
        })
    })
})

app.get('/consultar', (req, res) => {
    pool.connect((err, client, release) =>{
        if(err){
            return res.status(401).send({
                messagem: "erro de conexão",
                erro: err.message
            })
        }
        client.query('select * from cliente3', (error,result) =>{
            if(error){
                return res.status(500).send({
                    message: "ocorreu erro na consulta",
                    erro: error.message
                })
            }
            return res.status(200).send(result.rows)
        })
    })
})

app.get('/consultarcarro', (req, res) => {
    pool.connect((err, client, release) =>{
        if(err){
            return res.status(401).send({
                messagem: "erro de conexão",
                erro: err.message
            })
        }
        client.query('select * from carro3', (error,result) =>{
            if(error){
                return res.status(500).send({
                    message: "ocorreu erro na consulta",
                    erro: error.message
                })
            }
            return res.status(200).send(result.rows)
        })
    })
})

app.get('/consultarfuncionario', (req, res) => {
    pool.connect((err, client, release) =>{
        if(err){
            return res.status(401).send({
                messagem: "erro de conexão",
                erro: err.message
            })
        }
        client.query('select * from funcionario', (error,result) =>{
            if(error){
                return res.status(500).send({
                    message: "ocorreu erro na consulta",
                    erro: error.message
                })
            }
            return res.status(200).send(result.rows)
        })
    })
})

app.get('/consultartem', (req, res) => {
    pool.connect((err, client, release) =>{
        if(err){
            return res.status(401).send({
                messagem: "erro de conexão",
                erro: err.message
            })
        }
        client.query('select * from tem', (error,result) =>{
            if(error){
                return res.status(500).send({
                    message: "ocorreu erro na consulta",
                    erro: error.message
                })
            }
            return res.status(200).send(result.rows)
        })
    })
})

app.listen(8080, () => console.log('Executando em https://localhost:8080'))