const { where } = require("sequelize");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const authConfig = require("../config/auth.json");


function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 78300,
  })
}

module.exports = {
  // função para fazer login de usuários
  async login(req, res) {
    const { email, password, isLogged } = req.body; // extrai dados do corpo da requisição

    // busca um usuário com o e-mail fornecido
    const user = await User.findOne({ where: { email } });

    // verifica se o usuário existe
    if (!user) {
      return res.status(401).send({ msg: "E-mail ou senha incorretos" }); // retorna erro se o usuário não existir
    }

    // verifica se a senha fornecida corresponde à senha armazenada (hash)
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).send({ msg: "E-mail ou senha incorretos" }); // retorna erro se a senha estiver incorreta
    }

    const user_id = user.id; // obtém o ID do usuário

    // atualiza o status de login do usuário no banco de dados
    await User.update({ isLogged }, { where: { id: user_id } });

    user.password = undefined; // remove a senha do objeto do usuário antes de enviar a resposta

    const token = generateToken({id: user.id})

    // retorna uma resposta de sucesso com os dados do usuário (sem a senha)
    return res.status(200).send({ msg: "Usuário logado com sucesso", user, token });
  },

  // função para listar todos os usuários
  async index(req, res) {
    const users = await User.findAll(); // busca todos os usuários no banco de dados

    // verifica se há usuários retornados
    if (users.length < 1) {
      return res.status(200).send({ message: "Nenhum usuário encontrado. " }); // retorna uma mensagem se nenhum usuário for encontrado
    }

    

    // retorna uma resposta de sucesso com a lista de usuários
    return res.status(200).send({ users });
  },

  // função para cadastrar um novo usuário
  async store(req, res) {
    const { name, email, password } = req.body; // extrai dados do corpo da requisição

    // hash da senha fornecida
    const passwordHash = await bcrypt.hash(password, 8);

    // cria um novo usuário no banco de dados
    const user = await User.create({ name, email, password: passwordHash });

    const token = generateToken({id: user.id})

    // retorna uma resposta de sucesso com os dados do usuário cadastrado
    
    return res.status(201).send({
      msg: 'Usuario cadastrado com sucesso', user, token
    });
  },

  // função para atualizar os dados de um usuário
  async update(req, res) {
    const { name, email, password } = req.body; // extrai dados do corpo da requisição
    const { userId } = req.params; // extrai o ID do usuário a ser atualizado dos parâmetros da URL

    // atualiza os dados do usuário no banco de dados
    await User.update({ name, email, password }, { where: { id: userId } });

    // retorna uma resposta de sucesso
    return res.status(200).send({ msg: `Usuario alterado com sucesso` });
  },

  // função para excluir um usuário
  async delete(req, res) {
    const { userId } = req.params; // extrai o ID do usuário a ser excluído dos parâmetros da URL

    // exclui o usuário do banco de dados
    await User.destroy({ where: { id: userId } });

    // retorna uma resposta de sucesso
    return res
      .status(200)
      .send({ msg: `Usuario ${userId} deletado com sucesso` });
  },
};
