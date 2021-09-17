const express = require('express')
const morgan = require('morgan')

const app = express()

const rotaDenuncias = require('./routes/denuncias')
const rotaUsuarios = require('./routes/usuarios')

app.use(morgan('dev'))

// app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept'
    )

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res
            .status(200)
            .send({})
    }

    next()
})

app.use('/usuarios', rotaUsuarios)
app.use('/denuncias', rotaDenuncias)

app.use((req, res, next) => {
    const erro = new Error('Não encontrado')
    erro.status = 404
    next(erro)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})

module.exports = app