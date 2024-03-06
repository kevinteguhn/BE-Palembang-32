const express = require('express');

const UserController = require('..//controller/users.js');

const router = express.Router();

//CREAT - POST 
router.post('/', UserController.createNewUser);

//READD - GET
router.get('/', UserController.getAllUsers);

//Update - PATCH
router.patch('/:idUser', UserController.updateUser);

//delete
router.delete('/:idUser', UserController.deleteUser)
module.exports = router;