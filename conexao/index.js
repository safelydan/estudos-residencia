
import { where } from "sequelize";
import sequelize from "./db.js"; 
import Produto from "./models/model.js";
import inquirer from "inquirer";

export async function criarProduto() {
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
  ]);

  // converte o preço para um número de ponto flutuante
  const preco = parseFloat(respostas.preco);

  
  const novoProduto = await Produto.create(respostas);
  
  await main();
}

// função principal
async function main() {
  // busca todos os produtos no banco de dados
  const produtos = await Produto.findAll();
  criarProduto();
  // for (const produto of produtos) {
  //   produto.descricao = 'vinte e oito';
  //   await produto.save();
  // }
  //await Produto.destroy({ where: { id: 2 } });
  console.log(JSON.stringify(produtos, null, 2));

}

criarProduto();
