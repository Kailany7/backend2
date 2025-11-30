import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import colaboradorRoutes from "./routes/colaborador.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando com Supabase!");
});

app.use("/api/colaboradores", colaboradorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor rodando na porta ${PORT}`)
);
