const res = require('express/lib/response');
const UsersModel = require('../models/users');
const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();

        res.json({
            message: 'Get All User sukses',
            data: data
        })
    }
    catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        }) 
    }
}

const createNewUser = async (req, res) => {
    const {body} = req;

    if (!body.username || !body.email || !body.password) {
        return res.status(400).json({
            message: 'Anda Memasukan Data yang Salah',
            data: null,
        })
    }

    try {
        await UsersModel.createNewUser(body);
        res.status(201).json({
            message: 'CREATE New user sukses',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        }) 
    }
}

const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await UsersModel.updateUser(body, idUser);
        res.json({
            message: 'UPDATE user sukses',
            data: {
                id: idUser,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        }) 
    }
}

const deleteUser = async (req, res,) => {
    const {idUser} = req.params;
    try {
        await UsersModel.deleteUser(idUser);
        res.json({
            message: 'DELETE user sukses',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        }) 
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}