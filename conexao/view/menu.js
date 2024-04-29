import MenuPrincipal from "./menuPrincipal.js";
import Produto from "../models/model.js";
import inquirer from "inquirer";
export async function cadastrarProduto() {
    const respostas = await inquirer.prompt([
      {
        type: "input",
        name: "nome",
        message: "digite o nome do produto que voce deseja adicionar", 
      },
      {
        type: "input",
        name: "descricao",
        message: "digite a descrição do produto que voce deseja adicionar", 
      },
      {
        type: "input",
        name: "preco",
        message: "digite o preço do produto que voce deseja adicionar", 
      },
    ])
    return respostas;
  }

export async function excluirProduto(){
    const resposta = await inquirer.prompt([{
        type: "input",
        name: "id",
        message: "qual o id do produto que voce deseja deletar?"
    }])
    return resposta.id;

}
