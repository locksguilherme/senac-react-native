const express = require('express')
const pg = require('pg')
const app = express()
const cors = require('cors')
const contatos = require('./contato')
const usuarios = require('./usuario')


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/contatos', contatos)
app.use('/usuarios', usuarios)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`servidor executando em http://localhost:${PORT}`)
})