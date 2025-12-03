import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";

const router = Router();

// Login
router.post("/login", AuthController.login);

// Registro
router.post("/register", AuthController.register);

export default router;
