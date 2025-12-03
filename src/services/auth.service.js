import bcrypt from "bcryptjs";
import { UserModel } from "../models/user.model.js";
import { generateToken } from "../utils/jwt.js";

export const AuthService = {
  async login(email, senha) {
    const user = await UserModel.findByEmail(email);
    if (!user) throw new Error("Usuário não encontrado");

    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) throw new Error("Senha incorreta");

    const token = generateToken({ id: user.id, email: user.email });

    return { token, user };
  },

  async register(nome, email, senha) {
    const exists = await UserModel.findByEmail(email);
    if (exists) throw new Error("Email já cadastrado");

    const senhaHash = await bcrypt.hash(senha, 10);

    const newUser = await UserModel.createUser(nome, email, senhaHash);
    return newUser;
  }
};
