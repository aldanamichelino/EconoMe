const express = require('express');
const router = express.Router();
const registroModel = require('../models/registroModel');
const uuid = require('uuid');
const md5 = require('md5');

router.post('/:id_u', async(req,res,next) => {
    try {
        let obj = {
            id_u : req.params.id_u,
            nombre_u : req.body.nombre,
            apellido_u : req.body.apellido,
            email_u : req.body.mail,
            codigo_email_u : uuid(),
            password_u : md5(req.body.password)
        }

        let registro_ok = await registroModel.registrar(obj);

        if(registro_ok) {
            res.json({status : 'ok', message : 'Se envió un correo a tu cuenta de correo electrónico'})
        } else {
            res.status(500).json({status:"error"});

        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({status:"error"});
    }
})

module.exports  = router;