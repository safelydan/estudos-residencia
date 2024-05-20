const {Model, DataTypes } = require("sequelize");
const Course = require('./Course')
const UserCourse = require('./UserCourse')

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        isLogged: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        tableName: "users",
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.Course, { foreignKey: 'userId', through: 'userCourses', as: 'courses'});
}
}



// User.hasMany(UserCourse, {foreignKey: 'userId'});
// UserCourse.belongsTo(User, {foreignKey: 'userId'});
// Course.hasMany(UserCourse, {foreignKey: 'courseId'});
// UserCourse.belongsTo(Course, {foreignKey: 'courseId'});



module.exports = User;
