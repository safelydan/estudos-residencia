const {DataTypes, Model} = require('sequelize');

class Course extends Model{
    static init (sequelize){
        super.init(
            {
                
            },
            {
                sequelize,
                tableName: 'Courses',
                modelName: 'Course'
            }
        )
    }
}

module.exports = Course;