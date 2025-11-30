import "dotenv/config";
import "./src/config/database.js";
import express from "express";
import cors from "cors";

// Rotas
import auditoriaRoutes from "./src/routes/auditoria.routes.js";
import configRoutes from "./src/routes/configuracoes.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Usar as rotas
app.use("/auditoria", auditoriaRoutes);
app.use("/config", configRoutes);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
