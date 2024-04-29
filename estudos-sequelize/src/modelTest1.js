import {Model, DataTypes } from "sequelize";
import sequelize from "./db.js";


// definindo as classes de modelo
export class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
      },
      { sequelize, modelName: "cliente", tableName: "clientes" }
    );
  }
}

Cliente.init(sequelize);

export default Cliente;
