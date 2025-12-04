import {
  getAllColaboradores,
  createColaborador,
  updateColaborador,
  deleteColaborador,
} from "../services/colaborador.service.js";

export async function listar(req, res) {
  try {
    const colaboradores = await getAllColaboradores();
    res.json(colaboradores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function criar(req, res) {
  try {
    const novo = await createColaborador(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function atualizar(req, res) {
  try {
    const { id } = req.params;
    const atualizado = await updateColaborador(id, req.body);
    res.json(atualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function remover(req, res) {
  try {
    const { id } = req.params;
    await deleteColaborador(id);
    res.json({ message: "Colaborador removido com sucesso!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
