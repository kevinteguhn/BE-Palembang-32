const express = require('express');

const DokterController = require('..//controller/dokter.js');

const router = express.Router();

//CREAT - POST 
router.post('/', DokterController.createNewDokter);

//READD - GET
router.get('/', DokterController.getAllDokter);

//Update - PATCH
router.patch('/:idDokter', DokterController.updateDokter);

//delete
router.delete('/:idDokter', DokterController.deleteDokter)
module.exports = router;