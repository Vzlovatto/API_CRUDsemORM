import * as usuarioModel from "../models/usuarioModel.js";

export const listar = async (req, res) => {
  try {
    const usuarios = await usuarioModel.listarUsuarios();
    return res.json(usuarios);
  } catch (e) {
    return res.status(500).json({ erro: "Falha ao listar usuarios" });
  }
};

export const criar = async (req, res) => {
  try {
    const { nome, email } = req.body;
    const result = await usuarioModel.criarUsuario(nome, email);
    return res.status(201).json({ id: result.insertId, nome, email });
  } catch (e) {
    return res.status(500).json({ erro: "Falha ao criar usuario" });
  }
};

export const atualizar = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;
    const result = await usuarioModel.atualizarUsuario(id, nome, email);

    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: "Usuario não encontrado" });
    }

    return res.json({ mensagem: "Atualizado com sucesso" });
  } catch (e) {
    return res.status(500).json({ erro: "Falha ao atualizar usuario" });
  }
};

export const deletar = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await usuarioModel.deletarUsuario(id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: "Usuario não encontrado" });
    }

    return res.json({ mensagem: "Deletado com sucesso" });
  } catch (e) {
    return res.status(500).json({ erro: "Falha ao deletar usuario" });
  }
};