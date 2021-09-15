exports.getUsuarios = (req, res, next) => {
    return res.status(200).send({
        mensagem: 'GET tudo nos conformes'
    })
}

exports.getByIdUsuarios = (req, res, next) => {
    return res.status(200).send({
        mensagem: 'GET:id tudo nos conformes'
    })
}

exports.postUsuarios = (req, res, next) => {
    return res.status(200).send({
        mensagem: 'POST tudo nos conformes'
    })
}

exports.patchUsuarios = (req, res, next) => {
    return res.status(200).send({
        mensagem: 'PATCH tudo nos conformes'
    })
}

exports.deleteUsuarios = (req, res, next) => {
    return res.status(200).send({
        mensagem: 'DELETE tudo nos conformes'
    })
}