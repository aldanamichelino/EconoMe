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
        let ahorrosUsuario = await ahorrosModel.getAhorrosUsuario(req.params.id_u);
        res.json({status : 'ok', id : req.id, ahorros : ahorrosUsuario});

    } catch (error) {
        console.log(error);
        res.status(500).json({status : 'error'})
    }
})


router.get('/:id_u/:id_a', async(req, res, next) => {
    try {
        let ahorroUsuario = await ahorrosModel.getAhorroUsuario(req.params.id_u, req.params.id_a);
        res.json({status : 'ok', id : req.id, ahorro : ahorroUsuario});

    } catch (error) {
        console.log(error);
        res.status(500).json({status : 'error'})
    }
})


router.put('/:id_u/:id_a', async(req, res, next) => {

    try {

        let idUsuario = req.params.id_u;
        let idAhorro = req.params.id_a;

        let ahorroModificado = {
            monto_a : req.body.monto
        }

        let ahorro_update = await ahorrosModel.updateAhorro(ahorroModificado, idUsuario, idAhorro);

        if(ahorro_update != undefined){
            res.json({status : 'ok', data : ahorro_update});
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({status : 'error'})
    }
})


router.delete('/:id_u/:id_a', async(req, res, next) => {

    try {

        let idUsuario = req.params.id_u;
        let idAhorro = req.params.id_a;

        let ahorro_delete = await ahorrosModel.deleteAhorro(idUsuario, idAhorro);

        if(ahorro_delete){
            res.json({status : 'ok', message : 'ahorro eliminado'});
        }
 
    } catch(error){
        console.log(error)
        res.status(500).json({status : 'error'});
    }
})




module.exports = router;

