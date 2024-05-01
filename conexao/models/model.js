import { DataTypes, Model } from "sequelize";
import sequelize from "../db.js";

class Produto extends Model {
  // método estático para inicializar o modelo Produto
  static init(sequelize) {
    super.init(
      {
        // definição dos atributos do modelo
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: { type: DataTypes.STRING },
        preco: { type: DataTypes.DECIMAL },
        descricao: { type: DataTypes.STRING },
      },
      {
        // configurações adicionais do modelo
        sequelize,
        modelName: "Produto",
        tableName: "Produtos",
      }
    );
  }
}

// inicialização do modelo Produto com o Sequelize
Produto.init(sequelize);

export default Produto;
