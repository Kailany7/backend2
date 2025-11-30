import ConfiguracoesService from "../services/configuracoes.service.js";

class ConfiguracoesController {
    async buscar(req, res) {
        try {
            const { chave } = req.params;
            const config = await ConfiguracoesService.buscarPorChave(chave);
            res.json(config);
        } catch (e) {
            res.status(404).json({ error: e.message });
        }
    }

    async atualizar(req, res) {
        try {
            const { chave } = req.params;
            const nova = req.body;
            const resultado = await ConfiguracoesService.atualizar(chave, nova);
            res.json(resultado);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}

export default new ConfiguracoesController();
