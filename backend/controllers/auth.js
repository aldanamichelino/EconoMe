const express = require('express');
const router = express.Router();
const md5 = require('md5');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const usuariosModel = require('../models/usuariosModel');

router.post('/login', async(req, res, next) => {
    try{
        let usuario = await usuariosModel.getUsuarioPorEmail(req.body.email, md5(req.body.password));
        console.log(usuario);
        if(usuario.length > 0 && usuario[0].cuenta_confirmada_u == 1) {
            var signOptions = {
                expiresIn : "2h",
                algorithm : "RS256"
            }

            const privateKey = fs.readFileSync('./keys/private.pem', 'utf-8');
            const payload = {id : usuario[0].id_u, nombre : usuario[0].nombre_u, role: usuario[0].permisos_u};

            console.log(payload);
            
            const usuario_ok = {nombre : usuario[0].nombre_u};
            const token = jwt.sign(payload, privateKey, signOptions);
            res.json({usuario_ok, JWT : token});
        
        } else {
            res.json({status : 'Cuenta no confirmada. Por favor, revisa tu casilla de correo.'});
        }

    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'});
    }

});

module.exports = router;