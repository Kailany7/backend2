import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  // Verifica se veio "Authorization: Bearer token"
  if (!authHeader) {
    return res.status(401).json({ erro: "Token não enviado." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // adiciona os dados do usuário na requisição
    next(); // segue para a rota
  } catch (error) {
    return res.status(401).json({ erro: "Token inválido ou expirado." });
  }
}
