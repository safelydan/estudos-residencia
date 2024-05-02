import { DataTypes, Model } from "sequelize";
import sequelize from "../db.js";

export class Categoria extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        nome: { type: DataTypes.STRING },
      },
      { sequelize, modelName: "Categoria", tableName: "Categorias" }
    );
  }
}

Categoria.init(sequelize);

export default Categoria;