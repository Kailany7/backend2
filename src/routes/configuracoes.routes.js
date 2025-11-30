import { Router } from "express";
import ConfiguracoesController from "../controllers/configuracoes.controller.js";
import multer from "multer";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.get("/:chave", ConfiguracoesController.buscar);
router.put("/:chave", ConfiguracoesController.atualizar);

router.post("/upload-foto", upload.single("foto"), ConfiguracoesController.uploadFoto);

export default router;
