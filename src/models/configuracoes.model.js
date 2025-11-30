import db from "../config/database.js";

class ConfiguracoesModel {
    async buscar(chave) {
        const result = await db.query(
            "SELECT * FROM configuracoes WHERE chave = $1",
            [chave]
        );
        return result.rows[0];
    }

    async atualizar(chave, dados) {
        const result = await db.query(
            "UPDATE configuracoes SET valor = $1 WHERE chave = $2 RETURNING *",
            [dados.valor, chave]
        );
        return result.rows[0];
    }

    // 👉 INSERE OU ATUALIZA A FOTO
    async salvarFoto(chave, caminho) {
        const result = await db.query(
            `INSERT INTO configuracoes (chave, valor)
             VALUES ($1, $2)
             ON CONFLICT (chave) DO UPDATE SET valor = EXCLUDED.valor
             RETURNING *`,
            [chave, caminho]
        );

        return result.rows[0].valor;
    }
}

export default new ConfiguracoesModel();
