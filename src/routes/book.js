const express = require('express');

const BookController = require('..//controller/book.js');

const router = express.Router();

//CREAT - POST 
router.post('/', BookController.createNewBook);

//READD - GET
router.get('/', BookController.getAllBook);

//Update - PATCH
router.patch('/:idBook', BookController.updateBook);

//delete
router.delete('/:idBook', BookController.deleteBook)
module.exports = router;