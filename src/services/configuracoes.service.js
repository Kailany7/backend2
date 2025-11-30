import ConfiguracoesModel from "../models/configuracoes.model.js";

class ConfiguracoesService {
    async buscarPorChave(chave) {
        return ConfiguracoesModel.buscarPorChave(chave);
    }

    async atualizar(chave, dados) {
        return ConfiguracoesModel.atualizar(chave, dados.valor);
    }
}

export default new ConfiguracoesService();
