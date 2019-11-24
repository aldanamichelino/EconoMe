const utils = require('util');
const pool = require('../bd');

async function getIdCP(id) {
    let query = "SELECT id_cp FROM ?? WHERE id_u_cp = ?";
    const rows = await pool.query(query, [process.env.TABLA_CUENTA_PROYECTO, id]);

    return rows;
}

async function insertarAhorro(monto, id_u){
    try {
        
        let id_cp = await getIdCP(id_u);

        let ahorro = {
            monto_a : monto,
            id_u_a : id_u,
            id_cp_a : id_cp[0].id_cp
        }
     
        let query = "INSERT INTO ?? SET ?"
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


async function getAhorrosDetalladosUsuario(id_u){
    try {
        let query = "select monto_a from ?? where id_u_a = ? and monto_a > 0"
        const rows = await pool.query(query, [process.env.TABLA_AHORROS, id_u]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getAhorrosGastosUsuario(id_u){
    try {
        let query = "select sum(monto_a) from ?? where id_u_a = ? and monto_a < 0"
        const rows = await pool.query(query, [process.env.TABLA_AHORROS, id_u]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getAhorrosGastosDetalladosUsuario(id_u){
    try {
        let query = "select monto_a from ?? where id_u_a = ? and monto_a < 0"
        const rows = await pool.query(query, [process.env.TABLA_AHORROS, id_u]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


async function updateAhorro(ahorroModificado, id_a){
    try {
        let query = "update ?? set ? where id_a = ?";
        const rows = await pool.query(query, ([process.env.TABLA_AHORROS, ahorroModificado, id_a]));
        return rows;
    } catch(error){
        console.log(error);
        throw error;
    }
}

async function deleteAhorro(id_a){
    try {
        let query = "delete from ?? where id_a = ?";
        const rows = await pool.query(query, [process.env.TABLA_AHORROS, id_a]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = {
    insertarAhorro,
    getAhorrosUsuario,
    getAhorrosDetalladosUsuario,
    getAhorrosGastosUsuario,
    getAhorrosGastosDetalladosUsuario,
    updateAhorro,
    deleteAhorro }