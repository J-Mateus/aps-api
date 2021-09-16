const express = require('express')
const login = require('../middlewares/login').login

const router = express.Router()

const DenunciaController = require('../controllers/denuncias-controller')

router.get('/', login, DenunciaController.getDenuncias);

router.get('/:id', login, DenunciaController.getByIdDenuncias)

router.post('/', login, DenunciaController.postDenuncias)

router.patch('/:id', login, DenunciaController.patchDenuncias)

router.delete('/:id', login, DenunciaController.deleteDenuncias)

module.exports = router