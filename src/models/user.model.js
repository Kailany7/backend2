import { supabase } from "../config/supabase.js";

export const UserModel = {
  async findByEmail(email) {
    const { data, error } = await supabase
      .from("usuarios")
      .select("*")
      .eq("email", email)
      .single();

    if (error) {
      return null;
    }

    return data; // contém { id, nome, email, senha, criado_em }
  },

  async createUser(nome, email, senhaCriptografada) {
    const { data, error } = await supabase
      .from("usuarios")
      .insert([
        {
          nome,
          email,
          senha: senhaCriptografada
        }
      ])
      .select()
      .single();

    if (error) return null;

    return data;
  }
};
