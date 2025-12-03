import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Garante que a chave existe
const secret = process.env.JWT_SECRET;
if (!secret) {
  throw new Error("JWT_SECRET não está definido no arquivo .env");
}

export function generateToken(payload) {
  return jwt.sign(payload, secret, {
    expiresIn: "1d"
  });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null; // evita crash da API se o token for inválido
  }
}
