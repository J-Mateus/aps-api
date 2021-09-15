exports.getDenuncias = (req, res, next) => {
    return res.status(200).send({
        mensagem: 'GET tudo nos conformes'
    })
}

exports.getByIdDenuncias = (req, res, next) => {
    return res.status(200).send({
        mensagem: 'GET:id tudo nos conformes'
    })
}

exports.postDenuncias = (req, res, next) => {
    return res.status(200).send({
        mensagem: 'POST tudo nos conformes'
    })
}

exports.patchDenuncias = (req, res, next) => {
    return res.status(200).send({
        mensagem: 'PATCH tudo nos conformes'
    })
}

exports.deleteDenuncias = (req, res, next) => {
    return res.status(200).send({
        mensagem: 'DELETE tudo nos conformes'
    })
}