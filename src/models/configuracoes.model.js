import { supabase } from "../config/supabaseClient.js";


class ConfiguracoesModel {

  // Buscar registro por chave
  async buscar(chave) {
    const { data, error } = await supabase
      .from("configuracoes_foto")
      .select("*")
      .eq("chave", chave)
      .single();

    if (error && error.code !== "PGRST116") {
      // código PGRST116 é "record not found"
      console.error(error);
      throw new Error("Erro ao buscar configuração");
    }

    return data || null;
  }

  // Atualizar o valor
  async atualizar(chave, dados) {
    const { data, error } = await supabase
      .from("configuracoes_foto")
      .update({
        valor: dados.valor,
        atualizado_em: new Date(),
      })
      .eq("chave", chave)
      .select()
      .single();

    if (error) {
      console.error(error);
      throw new Error("Erro ao atualizar configuração");
    }

    return data;
  }

  // Salvar a foto — insert or update
  async salvarFoto(chave, caminho) {
    const { data, error } = await supabase
      .from("configuracoes_foto")
      .upsert(
        {
          chave,
          valor: caminho,
          tipo: "imagem",
          atualizado_em: new Date(),
        },
        { onConflict: "chave" }
      )
      .select()
      .single();

    if (error) {
      console.error(error);
      throw new Error("Erro ao salvar foto no banco");
    }

    return data.valor;
  }
}

export default new ConfiguracoesModel();
