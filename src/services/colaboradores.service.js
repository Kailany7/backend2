import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/auth.routes.js";
import colaboradorRoutes from "./routes/colaborador.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// rotas
app.use("/auth", authRoutes);
app.use("/colaboradores", colaboradorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
