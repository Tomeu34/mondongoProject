const { usersModel } = require('../models')
const { matchedData } = require('express-validator')
const { handleHttpError } = require('../utils/handleErrors')

const getItems = async (req, res) => {

    try{
        const data = await usersModel.find({})
        res.send(data)
    }catch(err){
        //Si nos sirve el de por defecto que hemos establecido, no es necesario pasar el 403
        handleHttpError(res, 'ERROR_GET_ITEMS', 403)
    }
}

const getItem = async (req, res) => {
    const data = await usersModel.findOne({email: req.params.email});
    res.json(data)
}

const createItem = async (req, res) => {
    try {
        const body = matchedData(req) //El dato filtrado por el modelo (probar con body=req)
        const data = await usersModel.create(body)
        res.send(data)
    }catch(err){
        handleHttpError(res, 'ERROR_CREATE_ITEMS')
    }
}

const updateItem = async (req, res) => {

    const email = req.params.email;
    const data = await usersModel.findOndeAndDelete(
        {email},
        req.body, {returnDocument: 'after'});
    res.JSON(data);
}

const deleteItem = async (req, res) => {

    const data = await usersModel.findOneAndDelete({email: req.params.email})
    res.json(data);
}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};