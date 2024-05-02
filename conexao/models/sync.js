import sequelize from "../db.js";
import Produto from "./produto.js";
import Fabricante from "./fabricante.js";
import Categoria from "./categoria.js";
import CategoriaProduto from "./produtoCategoria.js";

// sincronizando os modelos com o banco de dados
sequelize.sync({ force: true }).then(() => {
  console.log("Modelos sincronizados com o banco de dados.");
});

export default { Produto, Fabricante, Categoria, CategoriaProduto }; // exportando o modelo Produto
