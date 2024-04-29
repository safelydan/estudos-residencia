import inquirer from "inquirer";
import { cadastrarProduto} from "./menu.js";
import { adicionarProduto, listarProdutos, deletarProduto } from "../controller/produtoController.js";


class MenuPrincipal {
    async MenuPrincipal() {
        const resposta = await inquirer.prompt({
            type: "list",
            name: "opcao",
            message: "o que voce deseja fazer",
            choices: [
                "1-cadastrar novo produto",
                "2-excluir produto",
                "3-listar produtos",
            ]
        })
        switch (resposta.opcao){
        case "1-cadastrar novo produto":
            adicionarProduto()
            break;
        case "2-excluir produto":
            deletarProduto()
            break;
        case "3-listar produtos":
            listarProdutos()
            break;
        }
    }
}

export default MenuPrincipal;