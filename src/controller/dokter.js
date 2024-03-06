const res = require('express/lib/response');
const DokterModel = require('../models/dokter');
const getAllDokter = async (req, res) => {
    try {
        const [data] = await DokterModel.getAllDokter();

        res.json({
            message: 'Get All Dokter sukses',
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

const createNewDokter = async (req, res) => {
    const {body} = req;

    if (!body.nama || !body.bidang || !body.gambar) {
        return res.status(400).json({
            message: 'Anda Memasukan Data yang Salah',
            data: null,
        })
    }

    try {
        await DokterModel.createNewDokter(body);
        res.status(201).json({
            message: 'CREATE New Dokter sukses',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        }) 
    }
}

const updateDokter = async (req, res) => {
    const {idDokter} = req.params;
    const {body} = req;
    try {
        await DokterModel.updateDokter(body, idDokter);
        res.json({
            message: 'UPDATE Dokter sukses',
            data: {
                id: idDokter,
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

const deleteDokter = async (req, res,) => {
    const {idDokter} = req.params;
    try {
        await DokterModel.deleteDokter(idDokter);
        res.json({
            message: 'DELETE Dokter sukses',
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
    getAllDokter,
    createNewDokter,
    updateDokter,
    deleteDokter,
}