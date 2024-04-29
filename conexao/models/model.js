import { DataTypes, Model } from "sequelize";
import sequelize from "../db.js";

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: { type: DataTypes.STRING },
        preco: { type: DataTypes.DECIMAL },
        descricao: { type: DataTypes.STRING }
      },
      {
        sequelize,
        modelName: "Produto",
        tableName: "Produtos"
      }
    );
  }
}

Produto.init(sequelize)

export default Produto;
