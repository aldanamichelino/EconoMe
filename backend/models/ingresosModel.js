const pool = require('../bd');

async function getIngresos(id) {
    try {
        let query = "SELECT id_i, monto_i, moneda, categoria_i FROM ?? JOIN ?? ON id_categoria_i = id_ci JOIN ?? ON id_moneda_i = id_m WHERE id_usuario_i = ?";
        const rows = await pool.query(query, [process.env.TABLA_INGRESOS, process.env.TABLA_CATEGORIAS_INGRESOS, process.env.TABLA_MONEDA, id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getIngresosMonth(id) {
    try {
        let query = "SELECT * FROM ?? JOIN ?? ON id_categoria_i = id_ci JOIN ?? ON id_moneda_i = id_m WHERE MONTH(fecha) = MONTH(CURRENT_DATE()) AND YEAR(fecha) = YEAR(CURRENT_DATE()) AND id_usuario_i = ?";
        const rows = await pool.query(query, [process.env.TABLA_INGRESOS, process.env.TABLA_CATEGORIAS_INGRESOS,
        process.env.TABLA_MONEDA, id]);

        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getIngresosPorCat(id, cat) {
    try {
        let query = "SELECT id_i, monto_i, moneda, categoria_i FROM ?? JOIN ?? ON id_categoria_i = id_ci JOIN ?? ON id_moneda_i = id_m WHERE id_usuario_i = ? AND id_categoria_i = ?";
        const rows = await pool.query(query, [process.env.TABLA_INGRESOS, process.env.TABLA_CATEGORIAS_INGRESOS,
        process.env.TABLA_MONEDA, id, cat]);

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

      return rows;
  } catch (error) {
      console.log(error);
      throw error;
  }
}

async function deleteIngreso(id) {
    try {
        let query = "DELETE FROM ?? WHERE id_i = ?";
        const rows = await pool.query(query, [process.env.TABLA_INGRESOS, id]);

        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    getIngresos,
    getIngresosMonth,
    nuevoIngreso,
    getIngresosPorCat,
    updateIngreso,
    deleteIngreso
}
