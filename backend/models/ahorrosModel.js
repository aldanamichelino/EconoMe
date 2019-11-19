const utils = require('util');
const pool = require('../bd');

async function insertarAhorro(ahorro){
    try {
        let query = "insert into ?? set ?";
        const rows = await pool.query(query, [process.env.TABLA_AHORROS, ahorro]);
        return rows.insertId;

    } catch (error) {
        console.log('error al insertar ahorro');
        throw error;
    }
}

async function getAhorrosUsuario(id_u){
    try {
        let query = "select monto_a from ?? where id_u_a = ?";
        const rows = await pool.query(query, [process.env.TABLA_AHORROS, id_u]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    insertarAhorro,
    getAhorrosUsuario }