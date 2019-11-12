const express = require('express');
const router = express.Router();
const usuariosModel = require('../models/usuariosModel');

router.get('/', async(req, res, next) => {
    try {
        let user_data = await usuariosModel.getUsuarios(req.id);
        res.json({status : 'ok' , data : user_data});
    } catch (error) {
        res.status(500).json({status : 'error'});
    }
})

module.exports = router;
