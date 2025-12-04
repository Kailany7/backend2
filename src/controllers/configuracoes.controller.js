import ConfigService from "../services/configuracoes.service.js";

class ConfiguracoesController {
  async buscar(req, res) {
    try {
      const { chave } = req.params;
      const config = await ConfigService.buscarPorChave(chave);
      res.json(config);
    } catch (e) {
      res.status(404).json({ error: e.message });
    }
  }

  async atualizar(req, res) {
    try {
      const { chave } = req.params;
      const nova = req.body;
      const resultado = await ConfigService.atualizar(chave, nova);
      res.json(resultado);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  // ---------------------------- UPLOAD DA FOTO ----------------------------
  async uploadFoto(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "Nenhuma foto enviada." });
      }

      // Apenas filename, pois /uploads já é servido estaticamente
      const filename = req.file.filename;

      // URL que será acessada pelo front-end
      const url = `http://localhost:3000/uploads/${filename}`;

      // Salva no banco (via chave foto_perfil)
      const fotoUrl = await ConfigService.salvarFotoPerfil(url);

      return res.json({
        sucesso: true,
        foto_url: fotoUrl,
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  // ---------------------------- BUSCAR FOTO ----------------------------
  async fotoPerfil(req, res) {
    try {
      const config = await ConfigService.buscarPorChave("foto_perfil");

      return res.json({
        foto_url: config?.valor || null,
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}

export default new ConfiguracoesController();
