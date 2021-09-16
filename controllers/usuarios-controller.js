exports.loginUsuarios = (req, res, next) => {

    const dados = req.body

    return res.status(200).send({
        mensagem: 'LOGIN tudo nos conformes',
        usuario: dados
    })
}

exports.cadastroUsuarios = (req, res, next) => {

    const dados = req.body

    return res.status(200).send({
        mensagem: 'CADASTRO tudo nos conformes',
        usuario: dados
    })
}
