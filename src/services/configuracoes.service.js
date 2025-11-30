import { db } from "../config/database.js";

class ConfiguracoesService {
    async buscarPorChave(chave) {
        const { data, error } = await supabase
            .from("configuracoes")
            .select("*")
            .eq("chave", chave)
            .single();

        if (error) throw error;
        return data;
    }

    async atualizar(chave, nova) {
        const { data, error } = await supabase
            .from("configuracoes")
            .update(nova)
            .eq("chave", chave);

        if (error) throw error;
        return data;
    }
}

export default new ConfiguracoesService();
