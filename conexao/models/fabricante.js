import { DataTypes, Model } from "sequelize";
import sequelize from "../db.js";
import Produto from "./produto.js";

class Fabricante extends Model {
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
      { sequelize, modelName: "Fabricante", tableName: "Fabricantes" }
    );
  }
}

Fabricante.init(sequelize);

Fabricante.hasMany(Produto, { foreignKey: 'fabricanteId' });
Produto.belongsTo(Fabricante, { foreignKey: 'fabricanteId' });

export default Fabricante;
