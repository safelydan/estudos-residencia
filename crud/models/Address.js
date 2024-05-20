const {DataTypes, Model} = require('sequelize')
const User = require('./User')

class Address extends Model {
    static init(sequelize){
        super.init(
            {
                street: DataTypes.STRING,
                number: DataTypes.STRING,
                district: DataTypes.STRING, 
                city: DataTypes.STRING
            },
            {
                sequelize,
                tableName: "addresses"
            }   
        )
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'userId', as: 'users' });
      }
}


module.exports = Address;