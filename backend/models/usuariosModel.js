const pool = require('../bd');

async function getUsuario(id) {
    try {
        let query = "select nombre_u, apellido_u, email_u from ?? where id_u = ?";
        const rows = await pool.query(query,[process.env.TABLA_USUARIOS,id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getUsuario
}
