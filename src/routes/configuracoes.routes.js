import { Router } from "express";
import ConfiguracoesController from "../controllers/configuracoes.controller.js";

const router = Router();

router.get("/:chave", ConfiguracoesController.buscar);
router.put("/:chave", ConfiguracoesController.atualizar);

export default router;
