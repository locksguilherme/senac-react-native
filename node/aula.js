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

app.get('/clientes', (req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            return res.status(401).send({
                messagem: "erro de conexão",
                erro: err.message
            })
        }
        client.query('select * from cliente3', (error, result) => {
            if (error) {
                return res.status(500).send({
                    message: "ocorreu erro na consulta",
                    erro: error.message
                })
            }
            return res.status(200).send(result.rows)
        })
    })
})

app.get('/carro', (req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            return res.status(401).send({
                messagem: "erro de conexão",
                erro: err.message
            })
        }
        client.query('select * from carro3', (error, result) => {
            if (error) {
                return res.status(500).send({
                    message: "ocorreu erro na consulta",
                    erro: error.message
                })
            }
            return res.status(200).send(result.rows)
        })
    })
})

app.get('/funcionario', (req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            return res.status(401).send({
                messagem: "erro de conexão",
                erro: err.message
            })
        }
        client.query('select * from funcionario', (error, result) => {
            if (error) {
                return res.status(500).send({
                    message: "ocorreu erro na consulta",
                    erro: error.message
                })
            }
            return res.status(200).send(result.rows)
        })
    })
})

app.get('/tem', (req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            return res.status(401).send({
                messagem: "erro de conexão",
                erro: err.message
            })
        }
        client.query('select * from tem', (error, result) => {
            if (error) {
                return res.status(500).send({
                    message: "ocorreu erro na consulta",
                    erro: error.message
                })
            }
            return res.status(200).send(result.rows)
        })
    })
})

app.get('/clientes/:idcliente', (req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            return res.status(401).send({
                messagem: "erro de conexão",
                erro: err.message
            })
        }
        client.query(`select * from cliente3 where id=${req.params.idcliente}`, (error, result) => {
            release()
            if (error) {
                return res.status(500).send({
                    message: "ocorreu erro na consulta",
                    erro: error.message
                })
            }
            if (result.rows.length = 1) {
                return res.status(200).send(result.rows[0])
            }
            else{
                return res.status(404).send({
                    status: 404,
                    message: "id não encontrado"
            })}
        })
    })
})

app.get('/carro/:idcarro', (req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            return res.status(401).send({
                messagem: "erro de conexão",
                erro: err.message
            })
        }
        client.query(`select carronome from carro3 where id=${req.params.idcarro}`, (error, result) => {
            release()
            if (error) {
                return res.status(500).send({
                    message: "ocorreu erro na consulta",
                    erro: error.message
                })
            }
            if (result.rows.length == 1) {
                return res.status(200).send(result.rows[0])
            }
            else{
                return res.status(404).send({
                    status: 404,
                    message: "id não encontrado"
            })}
        })
    })
})

app.get('/tem/:idtem', (req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            return res.status(401).send({
                messagem: "erro de conexão",
                erro: err.message
            })
        }
        client.query(`select idcarro from tem where idpessoa=${req.params.idtem}`, (error, result) => {
            release()
            if (error) {
                return res.status(500).send({
                    message: "ocorreu erro na consulta",
                    erro: error.message
                })
            }
            if (result.rows.length == 1) {
                return res.status(200).send(result.rows[0])
            }
            else{
                return res.status(404).send({
                    status: 404,
                    message: "id não encontrado"
            })}
        })
    })
})

app.listen(8080, () => console.log('Executando em https://localhost:8080'))