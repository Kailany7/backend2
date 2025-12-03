import { AuthService } from "../services/auth.service.js";

export const AuthController = {

  async login(req, res) {
    try {
      const { email, senha } = req.body;

      const result = await AuthService.login(email, senha);

      return res.status(200).json({
        message: "Login bem-sucedido",
        token: result.token,
        user: result.user
      });

    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async register(req, res) {
    try {
      const { nome, email, senha } = req.body;

      const user = await AuthService.register(nome, email, senha);

      return res.status(201).json({
        message: "Usuário registrado com sucesso",
        user: user
      });

    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
};
