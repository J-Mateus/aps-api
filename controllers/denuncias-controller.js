exports.getDenuncias = (req, res, next) => {

    const idUsuario = req.body.id_usuario

    return res.status(200).send({
        mensagem: 'GET tudo nos conformes',
        id_usuario: idUsuario
    })
}

exports.getByIdDenuncias = (req, res, next) => {

    const idUsuario = req.body.id_usuario
    const idDenuncia = req.params.id

    return res.status(200).send({
        mensagem: 'GET:id tudo nos conformes',
        id_usuario: idUsuario,
        id_denuncia: idDenuncia
    })
}

exports.postDenuncias = (req, res, next) => {

    const idUsuario = req.body.id_usuario
    const dados = req.body


    return res.status(200).send({
        mensagem: 'POST tudo nos conformes',
        id_usuario: idUsuario,
        denuncia: dados
    })
}

exports.patchDenuncias = (req, res, next) => {
    
    const idUsuario = req.body.id_usuario
    const idDenuncia = req.params.id
    const dados = req.body

    return res.status(200).send({
        mensagem: 'PATCH tudo nos conformes',
        id_usuario: idUsuario,
        denuncia: dados
    })
}

exports.deleteDenuncias = (req, res, next) => {

    const idUsuario = req.body.id_usuario
    const idDenuncia = req.params.id

    return res.status(200).send({
        mensagem: 'DELETE tudo nos conformes',
        id_usuario: idUsuario,
        id_denuncia: idDenuncia
    })
}