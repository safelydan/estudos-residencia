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
                modelName: "Address",
                tableName: "addresses"
            }   
        )
    }
}


module.exports = Address;