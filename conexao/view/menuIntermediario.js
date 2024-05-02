import inquirer from "inquirer";
import { cadastrarProduto } from "./menusInternos.js";
import {
  adicionarProduto,
  listarProdutos,
  deletarProduto,
  updateProduto,
} from "../controller/produtoController.js";

 export async function MenuPrincipal() {
    const resposta = await inquirer.prompt({
      type: "list",
      name: "opcao",
      message: "O que voce deseja fazer? ",
      choices: [
        "1-Cadastrar novo produto",
        "2-Excluir produto",
        "3-Atualizar produto",
        "4-Listar produtos",
      ],
    });
    switch (resposta.opcao) {
      case "1-Cadastrar novo produto":
        adicionarProduto();
        break;
      case "2-Excluir produto":
        deletarProduto();
        break;
      case "3-Atualizar produto":
        updateProduto();
        break;
      case "4-Listar produtos":
        listarProdutos();
        break;
    }
  }


export default MenuPrincipal;
