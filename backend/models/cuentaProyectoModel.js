const utils = require('util');
const pool = require('../bd');

async function insertarCuentaProyecto(cuentaProyecto){
    try {
        let query = "insert into ?? set ?";
        const rows = await pool.query(query, [process.env.TABLA_CUENTA_PROYECTO, cuentaProyecto]);
        return rows.insertId;

    } catch (error) {
        console.log('error al crear la cuenta proyecto');
        throw error;
    }
}

module.exports = {
    insertarCuentaProyecto }