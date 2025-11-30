import ConfigModel from "../models/configuracoes.model.js";

class ConfiguracoesService {
    async buscarPorChave(chave) {
        return await ConfigModel.buscar(chave);
    }

    async atualizar(chave, novoValor) {
        return await ConfigModel.atualizar(chave, novoValor);
    }

    // 👉 SALVA A FOTO NO BANCO
    async salvarFotoPerfil(caminhoLocal) {
        const chave = "foto_perfil";
        return await ConfigModel.salvarFoto(chave, caminhoLocal);
    }
}

export default new ConfiguracoesService();
