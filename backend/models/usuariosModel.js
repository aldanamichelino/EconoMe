const pool = require('../bd');

async function getUsuario(id) {
    try {
        let query = "select nombre_u, apellido_u, email_u from ?? where id_u = ?";
        const rows = await pool.query(query,[process.env.TABLA_USUARIOS,id]);
        return rows;
    } catch (error) {
      console.log(error);
        throw error;
    }
}

async function getUsuarioPorEmail(email, password){
  try{
      let query = "select id_u, nombre_u, cuenta_confirmada_u from ?? where email_u = ? and password_u = ?";
      const rows = await pool.query(query,[process.env.TABLA_USUARIOS, email, password]);
      return rows;
  } catch(error){
      console.log(error);
      throw error;
  }
}

async function updateUsuario(obj, id) {
  try {
    let query = "UPDATE ?? SET ? WHERE id_u = ?";
    const rows = await pool.query(query, [process.env.TABLA_USUARIOS, obj, id]);
    return rows;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

async function deleteUsuario(id) {
  try {
    let query = "DELETE FROM ?? WHERE id_u = ?"
    const rows = await pool.query(query, [process.env.TABLA_USUARIOS, id]);
    return rows;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

module.exports = {
    getUsuario,
    getUsuarioPorEmail,
    updateUsuario,
    deleteUsuario
}
