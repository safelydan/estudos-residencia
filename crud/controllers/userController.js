const { where } = require("sequelize");
const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  async login(req, res) {
    const { email, password, isLogged } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(404).send({ msg: "Usuario nao encontrado" });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(404).send({ msg: "E-mail ou Senha incorretos" });
    }

    const user_id = user.id;

    await User.update({ isLogged }, { where: { id: user_id } });

    user.password = undefined;

    return res
      .status(200)
      .send({ msg: "Usuário logado com sucesso", user });
  },

  async index(req, res) {
    const users = await User.findAll();

    if (users.length < 1) {
      return res.status(200).send({ message: "Nenhum usuário encontrado. " });
    }

    return res.status(200).send({ users });
  },

  async store(req, res) {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    return res.status(201).send({
      msg: `Usuario cadastrado com sucesso 
        ${user}`,
    });
  },

  async update(req, res) {
    const { name, email, password } = req.body;
    const { userId } = req.params;

    const user = await User.update(
      { name, email, password },
      { where: { id: userId } }
    );

    return res.status(200).send({ msg: `Usuario alterado com sucesso` });
  },

  async delete(req, res) {
    const { userId } = req.params;

    await User.destroy({ where: { id: userId } });

    return res
      .status(200)
      .send({ msg: `Usuario ${userId}deletado com sucesso` });
  },
};
