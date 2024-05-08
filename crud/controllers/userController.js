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

    },

    async update (req, res){

    },

    async delete (req, res){

    }

}