const pool = require('../bd');

async function getIngresos(id) {
    try {
        let query = "SELECT id_i, monto_i, categoria_i FROM ?? JOIN ?? ON id_categoria_i = id_ci WHERE id_usuario_i = ?";
        const rows = await pool.query(query, [process.env.TABLA_INGRESOS, process.env.TABLA_CATEGORIAS_INGRESOS, id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getIngresosPorCat(id, cat) {
    try {
        let query = "SELECT id_i, monto_i, categoria_i FROM ?? JOIN ?? ON id_categoria_i = id_ci WHERE id_usuario_i = ? AND categoria_i = ?";
        const rows = await pool.query(query, [process.env.TABLA_INGRESOS, process.env.TABLA_CATEGORIAS_INGRESOS, id, cat]);

        console.log(rows);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function nuevoIngreso(obj) {
    try {
        let query = "INSERT INTO ?? SET ?";
        const rows = await pool.query(query, [process.env.TABLA_INGRESOS, obj]);
        return rows.insertId;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function updateIngreso(obj, id) {
  try {
      
      let query = "UPDATE ?? SET ? WHERE id_i = ?";
      const rows = await pool.query(query, [process.env.TABLA_INGRESOS, obj, id]);

      console.log(rows);
      
      return rows;
  } catch (error) {
      console.log(error);
      throw error;
  }
}

module.exports = {
    getIngresos,
    nuevoIngreso,
    getIngresosPorCat,
    updateIngreso
}
