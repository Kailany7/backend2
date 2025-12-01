import db from "../config/database.js";

class ConfiguracoesModel {
  async buscar(chave) {
    const result = await db.query(
      "SELECT * FROM configuracoes_foto WHERE chave = $1",
      [chave]
    );
    return result.rows[0];
  }

  async atualizar(chave, dados) {
    const result = await db.query(
      "UPDATE configuracoes_foto SET valor = $1, atualizado_em = NOW() WHERE chave = $2 RETURNING *",
      [dados.valor, chave]
    );
    return result.rows[0];
  }

  async salvarFoto(chave, caminho) {
    const result = await db.query(
      `INSERT INTO configuracoes_foto (chave, valor, tipo, atualizado_em)
       VALUES ($1, $2, 'imagem', NOW())
       ON CONFLICT (chave) DO UPDATE SET valor = EXCLUDED.valor, atualizado_em = NOW()
       RETURNING *`,
      [chave, caminho]
    );

    return result.rows[0].valor;
  }
}

export default new ConfiguracoesModel();
