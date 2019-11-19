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
        let query = "select sum(monto_a) from ?? where id_u_a = ?";
        const rows = await pool.query(query, [process.env.TABLA_AHORROS, id_u]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


async function getAhorroUsuario(id_u, id_a){
    try {
        let query = "select monto_a from ?? where id_u_a = ? and id_a = ?";
        const rows = await pool.query(query, [process.env.TABLA_AHORROS, id_u, id_a]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


async function updateAhorro(ahorroModificado, id_u, id_a){
    try {
        let query = "update ?? set ? where id_u_a = ? and id_a = ?";
        const rows = await pool.query(query, ([process.env.TABLA_AHORROS, ahorroModificado, id_u, id_a]));
        return rows;
    } catch(error){
        console.log(error);
        throw error;
    }
}

async function deleteAhorro(id_u, id_a){
    try {
        let query = "delete from ?? where id_u_a = ? and id_a = ?";
        const rows = await pool.query(query, [process.env.TABLA_AHORROS, id_u, id_a]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = {
    insertarAhorro,
    getAhorrosUsuario,
    getAhorroUsuario,
    updateAhorro,
    deleteAhorro }