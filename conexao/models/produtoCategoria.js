import { DataTypes, Model } from "sequelize";
import sequelize from "../db.js";

export class CategoriaProduto extends Model {
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
      { sequelize, modelName: "CategoriaProduto", tableName: "CategoriaProdutos" }
    );
  }
}

CategoriaProduto.init(sequelize);

export default CategoriaProduto;