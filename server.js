import "dotenv/config";
import "./src/config/database.js";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// 👉 Necessário para usar __dirname em ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Rotas
import auditoriaRoutes from "./src/routes/auditoria.routes.js";
import configRoutes from "./src/routes/configuracoes.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Usar as rotas
app.use("/auditoria", auditoriaRoutes);
app.use("/config", configRoutes);

app.use("/uploads", express.static(path.join(process.cwd(), "src/uploads")));
app.use("/uploads", express.static(path.join(process.cwd(), "src/uploads")));

// Inicialização do servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
