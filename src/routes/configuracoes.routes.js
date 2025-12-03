import { Router } from "express";
import ConfiguracoesController from "../controllers/configuracoes.controller.js";
import { upload } from "../utils/upload.js"; // usa a configuração correta

const router = Router();

// 👉 Buscar foto de perfil (nova rota)
router.get("/foto-perfil", ConfiguracoesController.fotoPerfil);

// 👉 Buscar configuração por chave
router.get("/:chave", ConfiguracoesController.buscar);

// 👉 Atualizar configuração por chave
router.put("/:chave", ConfiguracoesController.atualizar);

// 👉 Upload da foto (usando o upload do utils)
router.post("/upload-foto", upload.single("foto"), ConfiguracoesController.uploadFoto);

export default router;
