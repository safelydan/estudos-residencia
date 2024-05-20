const User = require("../models/User");
const Address = require("../models/Address");

module.exports = {
  async store(req, res) {
    const { street, number, district, city } = req.body;
    const { userId } = req.params;

    const address = await Address.create({
      userId,
      street,
      number,
      district,
      city,
    });

    return res.status(201).send({ msg: "Endereço associado com sucesso" });
  },

  async index(req, res) {
    const address = await Address.findAll({
      include: { model: User, as: 'users', attributes: ["name"]},
    });

    if (address.length < 1) {
      return res.status(200).send({ message: "Nenhum usuário encontrado. " }); // retorna uma mensagem se nenhum usuário for encontrado
    }

    return res.status(200).send({ address });
  },

  async indexById(req, res) {
    const { userId } = req.params;

    const user = await User.findByPk(userId, {
      include: { association: "address" },
    });

    return res.status(200).send({ user });
  },

  async update() {},

  async delete() {},
};
