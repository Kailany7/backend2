import { Router } from "express";
import AuditoriaController from "../controllers/auditoria.controller.js";

const router = Router();

router.get("/", AuditoriaController.listar);
router.post("/", AuditoriaController.criar);

export default router;
