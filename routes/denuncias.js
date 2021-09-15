const express = require('express')

const router = express.Router()

const DenunciaController = require('../controllers/denuncias-controller')

router.get('/', DenunciaController.getDenuncias);

router.get('/:id', DenunciaController.getByIdDenuncias)

router.post('/', DenunciaController.postDenuncias)

router.patch('/:id', DenunciaController.patchDenuncias)

router.delete('/:id', DenunciaController.deleteDenuncias)

module.exports = router