import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import colaboradorRoutes from "./routes/colaborador.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.send("✅ Backend está rodando!");
});

// ROTAS
app.use("/api/auth", authRoutes);
app.use("/api/colaboradores", colaboradorRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
