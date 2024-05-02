import MenuPrincipal from "./menuPrincipal.js";
import Produto from "../models/produto.js";
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
  ]);
  return respostas;
}

export async function excluirProduto() {
  const resposta = await inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "Digite o id do produto que voce deseja excluir: ",
    },
  ]);
  return resposta.id;
}

export async function atualizarProduto() {
  const respostas = await inquirer.prompt([
    {
      type: "input",
      name: "idProduto",
      message: "Digite o ID do produto que você deseja alterar: ",
    },
    {
      type: "input",
      name: "novoNome",
      message: "Qual o novo nome do produto? ",
    },
    {
      type: "input",
      name: "novaDescricao",
      message: "Qual a nova descrição do produto?",
    },
    {
      type: "input",
      name: "novoPreco",
      message: "Qual o novo preço do produto? ",
    },
    
  ]);
  return respostas;
}
