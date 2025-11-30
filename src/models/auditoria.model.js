import pool from "../config/database.js";

class AuditoriaModel {

    async listar() {
        const query = "SELECT * FROM auditoria ORDER BY id DESC";
        const result = await pool.query(query);
        return result.rows;
    }

    async criar({ acao, usuario, detalhes }) {
        const query = `
            INSERT INTO auditoria (acao, usuario, detalhes, data)
            VALUES ($1, $2, $3, NOW())
            RETURNING *;
        `;
        const values = [acao, usuario, detalhes];

        const result = await pool.query(query, values);
        return result.rows[0];
    }
}

export default new AuditoriaModel();
