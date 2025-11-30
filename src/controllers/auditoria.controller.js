import AuditoriaService from "../services/auditoria.service.js";

class AuditoriaController {

    async listar(req, res) {
        try {
            const dados = await AuditoriaService.listar();
            return res.status(200).json(dados);
         } catch (error) {
            console.error("Erro ao listar auditoria:", error);
            return res.status(500).json({ error: "Erro ao buscar auditoria." });
        }
    }

    async criar(req, res) {
        try {
            const dados = await AuditoriaService.criar(req.body);
            return res.status(201).json(dados);
        } catch (error) {
            console.error("Erro ao criar auditoria:", error);
            return res.status(500).json({ error: "Erro ao criar auditoria." });
        }
    }
}

export default new AuditoriaController();
