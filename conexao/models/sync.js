import sequelize from "../db.js";
import Produto from "./model.js";

// sincronizando os modelos com o banco de dados
sequelize.sync().then(() => {
  console.log("Modelos sincronizados com o banco de dados.");
});

export default Produto; // exportando o modelo Produto
