import { DataTypes, Model } from "sequelize";
import sequelize from "../db.js";
import CategoriaProduto from "./produtoCategoria.js";
import Categoria from "./categoria.js";

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

Produto.hasMany(CategoriaProduto)
CategoriaProduto.belongsTo(Produto)
Categoria.hasMany(CategoriaProduto)
CategoriaProduto.belongsTo(Categoria)

export default Produto;
