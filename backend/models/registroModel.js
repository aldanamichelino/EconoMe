const pool = require('../bd');
const correosModel = require('./correosModel');

async function registrar(obj){
    try {
        let query = "insert into ?? set ?";
        const rows = await pool.query(query, [process.env.TABLA_USUARIOS, obj]);
        if(rows.insertId != undefined) {
            console.log('Usuario agregado');
            
            // let id_correo = await correosModel.sendGenericEmail(obj);
            // if(id_correo) {
            //     return true;
            // } else {
            //     return false; 

            // }
        } else {
            console.log('Te la mandaste');
        }

    } catch (error) {
        throw error;
    }
}

module.exports = {registrar}