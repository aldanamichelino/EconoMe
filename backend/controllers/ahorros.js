const express = require('express');
const router = express.Router();
const ahorrosModel = require('../models/ahorrosModel');

router.post('/:id_u', async(req, res, next)=>{

    try {

        let nuevoAhorro = {
            monto_a : req.body.monto,
            id_u_a : req.params.id_u,
            id_cp_a : req.body.cuentaElegida
        }

        let nuevoAhorro_ok = await ahorrosModel.insertarAhorro(nuevoAhorro);
        console.log(nuevoAhorro_ok);
        if(nuevoAhorro_ok != undefined){
            res.json({status: 'ok', id: nuevoAhorro_ok, message: "Ahorro reservado"});
        }

    } catch(error){
        res.status(500).json({status : 'error', error: error})
    }
});


router.get('/:id_u', async(req, res, next) => {
    try {
        let ahorrosUsuario = await ahorrosModel.getAhorrosUsuario(req.id);
        res.json({status : 'ok', id : req.id, ahorros : ahorrosUsuario});

    } catch (error) {
        console.log(error);
        res.status(500).json({status : 'error'})
    }
})

module.exports = router;

