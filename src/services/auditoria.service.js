import AuditoriaModel from "../models/auditoria.model.js";

class AuditoriaService {
    async listar() {
        return AuditoriaModel.listar();
    }

    async criar(data) {
        return AuditoriaModel.criar(data);
    }
}

export default new AuditoriaService();
