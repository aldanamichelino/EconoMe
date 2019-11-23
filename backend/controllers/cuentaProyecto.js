const express = require('express');
const router = express.Router();
const cuentaProyectoModel = require('../models/cuentaProyectoModel');

router.post('/:id_u', async(req, res, next)=>{

    try {

        let nuevaCuentaProyecto = {
            objetivo_cp : req.body.objetivo,
            id_u_cp : req.params.id_u
        }

        let nuevaCuentaProyecto_ok = await cuentaProyectoModel.insertarCuentaProyecto(nuevaCuentaProyecto);
        console.log(nuevaCuentaProyecto_ok);
        if(nuevaCuentaProyecto_ok != undefined){
            res.json({status: 'ok', id: nuevaCuentaProyecto_ok, message: "Cuenta proyecto creada"});
        }

    } catch(error){
        console.log(error);
        res.status(500).json({status : 'error', error: error})
    }
});


module.exports = router;