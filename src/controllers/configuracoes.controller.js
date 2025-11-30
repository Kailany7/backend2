import ConfiguracoesService from "../services/configuracoes.service.js";

class ConfiguracoesController {

    async buscar(req, res) {
        try {
            const { chave } = req.params;
            const config = await ConfiguracoesService.buscarPorChave(chave);

            if (!config) {
                return res.status(404).json({ error: "Configuração não encontrada." });
            }

            return res.status(200).json(config);

        } catch (error) {
            console.error("Erro ao buscar configuração:", error);
            return res.status(500).json({ error: "Erro ao buscar configuração." });
        }
    }

    async atualizar(req, res) {
        try {
            const { chave } = req.params;
            const dadosNovos = req.body;

            const resultado = await ConfiguracoesService.atualizar(chave, dadosNovos);

            return res.status(200).json(resultado);

        } catch (error) {
            console.error("Erro ao atualizar configuração:", error);
            return res.status(500).json({ error: "Erro ao atualizar configuração." });
        }
    }
}

export default new ConfiguracoesController();