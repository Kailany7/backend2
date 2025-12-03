import { supabase } from "../config/supabaseClient.js";

export const UserModel = {

  async findByEmail(email) {
    const { data, error } = await supabase
      .from("usuarios")
      .select("*")
      .eq("email", email)
      .single();

    if (error) return null;
    return data;
  },

  async createUser(nome, email, senha) {
    const { data, error } = await supabase
      .from("usuarios")
      .insert([{ nome, email, senha }])
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
};
