import { supabase } from "../config/supabaseClient.js";

export async function getAllColaboradores() {
  const { data, error } = await supabase
    .from("colaboradores")
    .select("*");

  if (error) throw error;
  return data;
}

export async function createColaborador(colaborador) {
  const { data, error } = await supabase
    .from("colaboradores")
    .insert([colaborador])
    .select();

  if (error) throw error;
  return data[0];
}

export async function updateColaborador(id, updates) {
  const { data, error } = await supabase
    .from("colaboradores")
    .update(updates)
    .eq("id", id)
    .select();

  if (error) throw error;
  return data[0];
}

export async function deleteColaborador(id) {
  const { error } = await supabase
    .from("colaboradores")
    .delete()
    .eq("id", id);

  if (error) throw error;
  return true;
}
