import ConfigService from "../services/configuracoes.service.js";

class ConfiguracoesController {
    async buscar(req, res) {
        try {
            const { chave } = req.params;
            const config = await ConfigService.buscarPorChave(chave);
            res.json(config);
        } catch (e) {
            res.status(404).json({ error: e.message });
        }
    }

    async atualizar(req, res) {
        try {
            const { chave } = req.params;
            const nova = req.body;
            const resultado = await ConfigService.atualizar(chave, nova);
            res.json(resultado);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    // MÉTODO RESPONSÁVEL POR UPLOAD DA FOTO
    async uploadFoto(req, res) {
        try {
            if (!req.file) {
                return res.status(400).json({ error: "Nenhuma foto enviada." });
            }

            const caminho = req.file.path; // Ex: uploads/abc123.jpg

            const url = await ConfigService.salvarFotoPerfil(caminho);

            res.json({
                sucesso: true,
                foto_url: url
            });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}

export default new ConfiguracoesController();
