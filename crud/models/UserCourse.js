const {DataTypes, Model} = require('sequelize');

class UserCourse extends Model{
    static init (sequelize){
        super.init(
            {

            },
            {
                sequelize,
                
            }
        )
    }
}

module.exports = UserCourse;