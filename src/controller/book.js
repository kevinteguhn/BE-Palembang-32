const res = require('express/lib/response');
const BookModel = require('../models/book');
const getAllBook = async (req, res) => {
    try {
        const [data] = await BookModel.getAllBook();

        res.json({
            message: 'Get All date sukses',
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

const createNewBook = async (req, res) => {
    const {body} = req;

    if (!body.nama || !body.number || !body.namaDokter || !body.dateBook || !body.question) {
        return res.status(400).json({
            message: 'Anda Memasukan Data yang Salah',
            data: null,
        })
    }

    try {
        await BookModel.createNewBook(body);
        res.status(201).json({
            message: 'CREATE New date sukses',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        }) 
    }
}

const updateBook = async (req, res) => {
    const {idBook} = req.params;
    const {body} = req;
    try {
        await BookModel.updateBook(body, idBook);
        res.json({
            message: 'UPDATE date sukses',
            data: {
                id: idBook,
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

const deleteBook = async (req, res,) => {
    const {idBook} = req.params;
    try {
        await BookModel.deleteBook(idBook);
        res.json({
            message: 'DELETE date sukses',
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
    getAllBook,
    createNewBook,
    updateBook,
    deleteBook,
}