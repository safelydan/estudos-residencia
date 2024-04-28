import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

// definindo as classes de modelo
class Cliente extends Model {
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

(async () => {
  await sequelize.sync();
  const cliente1 = await Cliente.create({ nome: "Alberto" });
  console.log(cliente1 instanceof Cliente);
  console.log(cliente1.nome);
})();

export { Cliente };
