const express = require('express');
const router = express.Router();
const ahorrosModel = require('../models/ahorrosModel');

router.post('/', async(req, res, next)=>{

    try {

        let monto_a = req.body.monto
        let id = req.id;

        let nuevoAhorro_ok = await ahorrosModel.insertarAhorro(monto_a, id);
        console.log(nuevoAhorro_ok);
        if(nuevoAhorro_ok != undefined){
            res.json({status: 'ok', id: nuevoAhorro_ok, message: "Ahorro reservado"});
        }

    } catch(error){
        res.status(500).json({status : 'error', error: error})
    }
});


router.get('/', async(req, res, next) => {
    try {

        let ahorrosUsuario = await ahorrosModel.getAhorrosUsuario(req.id);
        res.json({status : 'ok', id : req.id, ahorros : ahorrosUsuario});

    } catch (error) {
        console.log(error);
        res.status(500).json({status : 'error'})
    }
})


router.get('/', async(req, res, next) => {
    try {
        let ahorroUsuario = await ahorrosModel.getAhorrosDetalladosUsuario(req.id);
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


router.delete('/', async(req, res, next) => {

    try {

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