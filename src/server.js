import express from "express";
import cors from "cors";
import dotenv from "dotenv";
<<<<<<< HEAD

import authRoutes from "./routes/auth.routes.js";
=======
>>>>>>> origin/kailany

dotenv.config();

import colaboradorRoutes from "./routes/colaborador.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
<<<<<<< HEAD
  res.send("✅ Backend está rodando!");
});

// Somente AUTH
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
=======
  res.send("API funcionando com Supabase!");
});

app.use("/api/colaboradores", colaboradorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor rodando na porta ${PORT}`)
);
>>>>>>> origin/kailany
