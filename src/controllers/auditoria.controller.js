import AuditoriaService from "../services/auditoria.service.js";

class AuditoriaController {
    async listar(req, res) {
        try {
            const dados = await AuditoriaService.listar();
            res.json(dados);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    async criar(req, res) {
        try {
            const dados = await AuditoriaService.criar(req.body);
            res.json(dados);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}

export default new AuditoriaController();
