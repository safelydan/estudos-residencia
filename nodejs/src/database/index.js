import {Sequelize} from "sequelize"
import sequelize from "../config/database.js"

const connection = new Sequelize(sequelize);

export default connection;