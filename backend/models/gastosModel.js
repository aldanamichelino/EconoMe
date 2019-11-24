const pool = require('../bd');

async function getGastos(id) {
    try {
        let query = "SELECT * FROM ?? JOIN ?? ON id_categoria_g = id_cg WHERE id_u_g = ?";
        const rows = await pool.query(query, [process.env.TABLA_GASTOS, process.env.TABLA_CATEGORIAS_GASTOS, id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getGastosPorCat(id, cat) {
    try {
        let query = "SELECT * FROM ?? JOIN ?? ON id_categoria_g = id_cg WHERE id_u_g = ? AND categoria_g = ?";
        const rows = await pool.query(query, [process.env.TABLA_GASTOS, process.env.TABLA_CATEGORIAS_GASTOS, id, cat]);

        console.log(rows);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function nuevoGasto(obj) {
    try {
        let query = "INSERT INTO ?? SET ?";
        const rows = await pool.query(query, [process.env.TABLA_GASTOS, obj]);
        return rows.insertId;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function updateGasto(obj, id) {
  try {
      
      let query = "UPDATE ?? SET ? WHERE id_g = ?";
      const rows = await pool.query(query, [process.env.TABLA_GASTOS, obj, id]);

      return rows;
  } catch (error) {
      console.log(error);
      throw error;
  }
}

async function deleteGasto(id) {
    try {
        let query = "DELETE FROM ?? WHERE id_g = ?";
        const rows = await pool.query(query, [process.env.TABLA_GASTOS, id]);

        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    getGastos,
    nuevoGasto,
    getGastosPorCat,
    updateGasto,
    deleteGasto
}
