import "./src/config/database.js";
import express from "express";
import cors from "cors";
import auditoriaRoutes from "./src/routes/auditoria.routes.js";
import configRoutes from "./src/routes/configuracoes.routes.js";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use("/auditoria", auditoriaRoutes);
app.use("/config", configRoutes);

// Inicialização
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
