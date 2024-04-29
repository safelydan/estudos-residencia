import MenuPrincipal from "./menuPrincipal.js";
import Produto from "../models/model.js";
import inquirer from "inquirer";
export async function cadastrarProduto() {
    const respostas = await inquirer.prompt([
      {
        type: "input",
        name: "nome",
        message: "Digite o nome do produto que você deseja adicionar: ", 
      },
      {
        type: "input",
        name: "descricao",
        message: "Digite a descrição do produto que você deseja adicionar: ", 
      },
      {
        type: "input",
        name: "preco",
        message: "Digite o preço do produto que você deseja adicionar: ", 
      },
    ])
    return respostas;
  }

export async function excluirProduto(){
    const resposta = await inquirer.prompt([{
        type: "input",
        name: "id",
        message: 'Digite o id do produto que voce deseja excluir: '
    }])
    return resposta.id;

}
