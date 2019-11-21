const express = require('express');
const router = express.Router();
const categoriasModel = require('../models/categoriasModel.js');

router.get('/ingresos', async(req, res, next) => {
    try {
        let categorias_ok = await categoriasModel.getCategoriasIngresos();
        res.json({status : 'ok' , data : categorias_ok});
    } catch (error) {
        console.log(error);
        res.status(500).json({status : 'error'});
    }
})

router.get('/gastos', async(req, res, next) => {
    try {
        let categorias_ok = await categoriasModel.getCategoriasGastos();
        res.json({status : 'ok' , data : categorias_ok});
    } catch (error) {
        console.log(error);
        res.status(500).json({status : 'error'});
    }
})

router.post('/ingresos', async(req,res,next) => {
    try {

        let categoria_i = req.body.categoria;

        let categorias_i_ok = await categoriasModel.nuevaCategoriaI(categoria_i);

        if(categorias_i_ok != undefined) {
            res.json({status: 'ok', id: categorias_i_ok})
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({status:"error"});
    }
})


module.exports = router;
