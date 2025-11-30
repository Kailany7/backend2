import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

export const db = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: {
    rejectUnauthorized: false
  }
});

// Teste imediato da conexão
db.connect()
  .then(() => console.log("🔥 Conectado ao banco do Supabase!"))
  .catch(err => console.error("❌ Erro ao conectar no Supabase:", err));

  export default Pool;
