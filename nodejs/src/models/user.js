import {Model, DataTypes} from 'sequelize'
import sequelize from '../config/database.js';

class User extends Model{
    static init(sequelize){
        super.init({
            id: {
            type: DataTypes.INTEGER,
            autoincrement: true, 
            primaryKey: true}
        },
    {
        sequelize,
        modelName: 'User',
        tableName: 'Users'
    })
    }
}

User.init(sequelize);

export default User;