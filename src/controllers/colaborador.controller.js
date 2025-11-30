import { supabase } from "../services/supabase.js"

export const listarColaboradores = async (req, res) => {
  const { data, error } = await supabase
    .from("colaboradores")
    .select("*");

  if (error) return res.status(400).json({ error });

  return res.json(data);
};
