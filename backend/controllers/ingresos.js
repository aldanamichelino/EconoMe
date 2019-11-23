const express = require('express');
const router = express.Router();
const ingresosModel = require('../models/ingresosModel.js');

router.get('/', async(req, res, next) => {
    try {
        let ingresos_data = await ingresosModel.getIngresos(req.id);
        res.json({status : 'ok' , data : ingresos_data});
    } catch (error) {
        console.log(error);
        res.status(500).json({status : 'error'});
    }
})

router.get('/:categoria', async(req, res, next) => {
    try {
        let ingresos_cat_ok = await ingresosModel.getIngresosPorCat(req.id, req.params.categoria)
        res.json({status : 'ok', data : ingresos_cat_ok});
    } catch (error) {
        console.log(error);
        res.status(500).json({status : 'error'});
    }
})

router.post('/', async(req,res,next) => {
    try {
        let obj = {
            monto_i : req.body.monto,
            id_usuario_i : req.id,
            id_categoria_i : req.body.categoria,
        }
        console.log(req);
        

        let ingreso_ok = await ingresosModel.nuevoIngreso(obj);

        if(ingreso_ok != undefined) {
            res.json({status: 'ok', id: ingreso_ok})
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({status:"error"});
    }
})

router.put('/', async(req, res, next) => {
  try {
    let id= req.body.id_i;

    let obj = {
      monto_i : req.body.monto,
      id_categoria_i : req.body.categoria
    }

    let mod_ingreso_ok = await ingresosModel.updateIngreso(obj,id);

    if(mod_ingreso_ok != undefined) {
        res.json({status: 'ok', id: id})
    } 

  } catch (e) {
    console.log(e);
    res.status(500).json({status:"error"});
  }
});

router.delete('/', async(req, res, next) => {
    try {
        let id = req.body.id_i;

        let delete_ingreso_ok = await ingresosModel.deleteIngreso(id);

        if(delete_ingreso_ok != undefined) {
            res.json({status: 'ok', id: id});
        } 
    } catch (error) {
        console.log(error);
        res.status(500).json({status:"error"});
    }
})

module.exports = router;
