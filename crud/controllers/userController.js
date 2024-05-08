const { where } = require('sequelize')
const User = require('../models/User')

module.exports = {
    async index (req, res) {
        const users = await User.findAll()

        if(users.length < 1){
            return res.status(200).send({message: 'Nenhum usuário encontrado. '})
        }

        return res.status(200).send({users})
    },

    async store (req, res) {
        const {name, email, password} = req.body;

        const user = await User.create({name, email, password});

        return res.status(201).send({msg: `Usuario cadastrado com sucesso 
        ${user}`})
    },

    async update (req, res){
        const {name, email, password} = req.body;
        const {userId} = req.params;


        const user = await User.update({name, email, password}, {where: {id: userId}});

        return res.status(200).send({msg: `Usuario ${User.name} alterado com sucesso`})
    },

    async delete (req, res){

    }

}