import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colaboradoresRoutes from "./routes/colaboradores.routes.js"; // IMPORTANTE

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rota simples só para testar
app.get("/", (req, res) => {
  res.send("Backend está rodando!");
});

// Aqui registramos as rotas do módulo de colaboradores
app.use("/api/colaboradores", colaboradoresRoutes);

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
