const express = require('express')

const router = express.Router()

const UsuarioController = require('../controllers/usuarios-controller')


router.post('/cadastro', UsuarioController.cadastroUsuarios)

router.post('/login', UsuarioController.loginUsuarios)

module.exports = router