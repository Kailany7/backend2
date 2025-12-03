import "dotenv/config";
import "./src/config/database.js";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Para usar __dirname (ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rotas
import configRoutes from "./src/routes/configuracoes.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Servir as imagens da pasta uploads
app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "src/uploads"))
);

// Rotas CONFIG
app.use("/config", configRoutes);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
