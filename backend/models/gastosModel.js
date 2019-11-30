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

async function getGastosMonth(id) {
    try {
        let query = "SELECT * FROM ?? JOIN ?? WHERE MONTH(fecha) = MONTH(CURRENT_DATE()) AND YEAR(fecha) = YEAR(CURRENT_DATE()) AND id_u_g = ?";
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

async function getVencimientos(id) {
    try {

        let query = "SELECT * FROM ?? JOIN ?? WHERE vencimiento_g >= CURDATE() AND id_u_g = ? AND pagado = 0 ORDER BY vencimiento_g ASC;";
        const rows = await pool.query(query, [process.env.TABLA_GASTOS, process.env.TABLA_CATEGORIAS_GASTOS, id]);

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
    getGastosMonth,
    getGastosPorCat,
    getVencimientos,
    updateGasto,
    deleteGasto
}
