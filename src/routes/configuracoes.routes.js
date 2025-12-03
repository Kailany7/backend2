import { Router } from "express";
import ConfiguracoesController from "../controllers/configuracoes.controller.js";
import { upload } from "../utils/upload.js"; // multer configurado

const router = Router();

// Rota para buscar foto de perfil
router.get("/foto-perfil", ConfiguracoesController.fotoPerfil);

// Buscar configuração por chave
router.get("/:chave", ConfiguracoesController.buscar);

// Atualizar configuração por chave
router.put("/:chave", ConfiguracoesController.atualizar);

// Upload da foto
router.post(
  "/upload-foto",
  upload.single("foto"),
  ConfiguracoesController.uploadFoto
);

export default router;
