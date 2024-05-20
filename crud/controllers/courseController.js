const User = require('../models/User')
const Course = require('../models/Course')



module.exports = {
    async index (req, res){
        const {userId} = req.params;

        const user = await User.findByPk(userId, {
            include: { association: 'courses', through: { attributes: [ 'userId'] } }
        });

        if(!user){
            return res.status(400).send({
                msg: 'Usuario nao encontrado'
            })
        }

        return res.status(200).send(user.courses)
    },
    async store(req, res) {

        try {
  
            const { userId } = req.params;
            const { name } = req.body;
  
            const user = await User.findByPk(userId);
  
            if (!user) {
                return res.status(400).json({
                    status: 0,
                    message: 'Usuário não encontrado!'
                });
            }
  
            const [ course ] = await Course.findOrCreate({
              where: { name }
            });
  
            await user.addCourse(course);
  
            return res.status(200).json({
                status: 1,
                message: "Curso cadastrado com sucesso!",
                course
            });
  
          } catch (err) {
            return res.status(400).json({ error: err });
        }
      },
}