const {DataTypes, Model} = require('sequelize');

class Course extends Model{
    static init (sequelize){
        super.init(
            {
                name: DataTypes.STRING
            },
            {
                sequelize,
                tableName: 'courses',
            }
        )
    }
    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'courseId', through: 'userCourses', as: 'users'});
    }
}

module.exports = Course;