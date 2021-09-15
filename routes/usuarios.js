const express = require('express')

const router = express.Router()

const UsuarioController = require('../controllers/usuarios-controller')


router.get('/', UsuarioController.getUsuarios);

router.get('/:id', UsuarioController.getByIdUsuarios)

router.post('/', UsuarioController.postUsuarios)

router.patch('/:id', UsuarioController.patchUsuarios)

router.delete('/:id', UsuarioController.deleteUsuarios)

module.exports = router