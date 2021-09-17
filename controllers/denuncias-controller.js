const mysql = require('../mysql').pool

exports.getDenuncias = (req, res, next) => {

    mysql.getConnection((error, conn) => {
        if(error) return res.status(500).send({ error: error })
        
        const SQL = `SELECT 
                        d.id_denuncias,
                        d.nome,
                        d.telefone,
                        d.logradouro,
                        d.cep,
                        d.bairro,
                        d.cidade,
                        d.uf,
                        d.descricao
                FROM denuncias as d
                INNER JOIN usuarios as u
                    ON u.id_usuarios = d.usuarios_id_usuarios
                WHERE u.id_usuarios = ?`

        conn.query(SQL, [req.body.id_usuario], (error, result, fields) => {
            if(error) return res.status(500).send({ error: error })
            conn.release()

            return res.status(200).send({
                data: result
            })

        })
    })
}

exports.getByIdDenuncias = (req, res, next) => {

    mysql.getConnection((error, conn) => {
        if(error) return res.status(500).send({ error: error })
        
        const SQL = `
                SELECT
                    d.id_denuncias,
                    d.nome,
                    d.telefone,
                    d.logradouro,
                    d.cep,
                    d.bairro,
                    d.cidade,
                    d.uf,
                    d.descricao
            FROM denuncias as d
            INNER JOIN usuarios as u
                ON u.id_usuarios = d.usuarios_id_usuarios
            WHERE u.id_usuarios = ? AND d.id_denuncias = ?`

        conn.query(SQL, [req.body.id_usuario, req.params.id], (error, result, fields) => {
            if(error) return res.status(500).send({ error: error })
            conn.release()

            if(result.length == 0) {
                return res.status(404).send({
                    mensagem: 'Não foi encontrado denúncia com este id'
                })
            }

            return res.status(200).send({
                data: result[0]
            })

        })
    })
}

exports.postDenuncias = (req, res, next) => {

    mysql.getConnection((error, conn) => {
        if(error) return res.status(500).send({ error: error })
        
        const SQL = `
        INSERT INTO denuncias (
            usuarios_id_usuarios,
            nome,
            telefone,
            logradouro,
            cep,
            bairro,
            cidade,
            uf,
            descricao
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`


        conn.query(SQL, [
            req.body.id_usuario,
            req.body.nome,
            req.body.telefone,
            req.body.logradouro,
            req.body.cep,
            req.body.bairro,
            req.body.cidade,
            req.body.uf,
            req.body.descricao,
        ], (error, result, fields) => {
            if(error) return res.status(500).send({ error: error })
            conn.release()

            if(result.length == 0) {
                return res.status(404).send({
                    mensagem: 'Não foi encontrado denúncia com este id'
                })
            }  

            return res.status(200).send({
                id_denuncia: result.insertId,
                data: req.body
            })

        })
    })
}

exports.patchDenuncias = (req, res, next) => {
    
    const idUsuario = req.body.id_usuario
    const idDenuncia = req.params.id
    const dados = req.body



    mysql.getConnection((error, conn) => {
        if(error) return res.status(500).send({ error: error })
        
        const SQL = `
        UPDATE denuncias 
        SET nome = ?,
            telefone = ?,
            logradouro = ?,
            cep = ?,
            bairro = ?,
            cidade = ?,
            uf = ?,
            descricao = ?
        WHERE id_denuncias = ? AND usuarios_id_usuarios = ?`


        conn.query(SQL, [
            req.body.nome,
            req.body.telefone,
            req.body.logradouro,
            req.body.cep,
            req.body.bairro,
            req.body.cidade,
            req.body.uf,
            req.body.descricao,
            idDenuncia,
            idUsuario        
        ], (error, result, fields) => {
            if(error) return res.status(500).send({ error: error })
            conn.release()

            return res.status(200).send({
                data: req.body
            })

        })
    })
}

exports.deleteDenuncias = (req, res, next) => {
    const idUsuario = req.body.id_usuario
    const idDenuncia = req.params.id



    mysql.getConnection((error, conn) => {
        if(error) return res.status(500).send({ error: error })
        
        const SQL = `DELETE FROM denuncias WHERE id_denuncias = ? AND usuarios_id_usuarios = ?`

        conn.query(SQL, [idDenuncia, idUsuario], (error, result, fields) => {
            if(error) return res.status(500).send({ error: error })
            conn.release()

            return res.status(200).send({
                mensagem: 'Denúncia removida com sucesso',
            })

        })
    })
}