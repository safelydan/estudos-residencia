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
  console.log(respostas)
  
  const preco = parseFloat(respostas.preco);


  const novoProduto = await Produto.create(respostas);
//   console.log(novoProduto);
}

async function main(){
    const produtos = await Produto.findAll();
    // console.log(JSON.stringify(produtos, null, 2));
    await criarProduto()
}

main()
