import { db } from "../config/database.js";

class AuditoriaService {
    async listar() {
        const { data, error } = await supabase.from("auditoria_ponto").select("*");

        if (error) throw error;
        return data;
    }

    async criar(auditoria) {
        const { data, error } = await supabase
            .from("auditoria_ponto")
            .insert([auditoria]);

        if (error) throw error;
        return data;
    }
}

export default new AuditoriaService();
