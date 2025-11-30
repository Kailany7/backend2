import pool from "../config/database.js";

class ConfiguracoesModel {

    async buscarPorChave(chave) {
        const query = "SELECT * FROM configuracoes WHERE chave = $1 LIMIT 1";
        const result = await pool.query(query, [chave]);
        return result.rows[0];
    }

    async atualizar(chave, dados) {
        const query = `
            UPDATE configuracoes
            SET valor = $1, atualizado_em = NOW()
            WHERE chave = $2
            RETURNING *;
        `;
        const values = [dados.valor, chave];

        const result = await pool.query(query, values);
        return result.rows[0];
    }
}

export default new ConfiguracoesModel();
