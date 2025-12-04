import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

import authRoutes from "./routes/auth.routes.js";
import colaboradorRoutes from "./routes/colaborador.routes.js";
import configuracoesRoutes from "./routes/configuracoes.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Rotas API
app.use("/api/auth", authRoutes);
app.use("/api/colaboradores", colaboradorRoutes);
app.use("/api/configuracoes", configuracoesRoutes);

// SERVE A PASTA UPLOADS NA RAIZ
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

export default app;
