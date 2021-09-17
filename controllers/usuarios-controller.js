const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mysql = require('../mysql').pool

exports.cadastroUsuarios = (req, res, next) => {

    mysql.getConnection((err, conn) => {
        if(err) {return res.status(500).send({ error: err })}

        conn.query('SELECT * FROM usuarios WHERE email = ?', [req.body.email], (error, results) => {
            if(error) {return res.status(500).send({ error: error })}
            if(results.length > 0) {
                conn.release()
                res.status(409).send({ mensagem: 'Usuário já cadastrado'})
            }else {
                bcrypt.hash(req.body.senha, 10, (errBcrypt, hash) => {
                    if(errBcrypt) { return res.status(500).send({ error: errBcrypt })}
                    
                    console.log(req.body.nome,
                        req.body.email,
                        hash);

                    conn.query(`INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`, 
                    [
                        req.body.nome,
                        req.body.email,
                        hash
                    ],
                    (error, result) => {
                        conn.release()
                        if(errBcrypt) { return res.status(500).send({ error: errBcrypt })}
                        
                        

                        const response = {
                            mensagem: 'Usuário criado com sucesso',
                            usuarioCriado: {
                                id_usuario: result.insertId,
                                nome: req.body.nome,
                                email: req.body.email
                            }
                        }
                        return res.status(201).send(response)
                    })
                })
            }

        })

    })
}

exports.loginUsuarios = (req, res, next) => {

    mysql.getConnection((err, conn) => {
        if(err) {return res.status(500).send({ error: err })}
        const query = `SELECT * FROM usuarios WHERE email = ?`

        mysql.query(query, [req.body.email], (error, results, fields) => {
            conn.release()
            if(error) {return res.status(500).send({ error: error })}

            if(results.length < 1) {
                return res.status(401).send({ mensagem: 'Falha na autenticação'})
            }

            bcrypt.compare(req.body.senha, results[0].senha, (err, result) => {
                if(err) {
                    return res.status(401).send({ mensagem: 'Falha na autenticação'})
                }

                if(result) {
                    const token = jwt.sign({
                        id_usuario: results[0].id_usuarios,
                        email: results[0].email
                    },
                    process.env.JWT_KEY,
                    {
                        expiresIn: "1h"
                    })
                    return res.status(200).send({
                         mensagem: 'Autenticado com sucesso',
                         id_usuario: results[0].id_usuarios,
                         nome: results[0].nome,
                         token: token
                        })
                }

                return res.status(401).send({ mensagem: 'Falha na autenticação'})

            })
        })
    })
}

