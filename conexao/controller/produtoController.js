import MenuPrincipal from "../view/menuPrincipal.js";
import {cadastrarProduto, excluirProduto, atualizarProduto} from "../view/menu.js";
import Produto from "../models/model.js";


export async function adicionarProduto() {
  // obter as respostas do formulário de cadastro de produto
  const respostas = await cadastrarProduto();
  // converter o preço para número
  const preco = parseFloat(respostas.preco);
  // criar um novo objeto de produto com base nas respostas
  const novoProduto = await Produto.create(respostas);
  // mostrar o menu principal após adicionar o produto
  const menu = new MenuPrincipal();
  menu.MenuPrincipal();
}

// função para listar todos os produtos
export async function listarProdutos() {
  // obter todos os produtos cadastrados
  const produtos = await Produto.findAll();

  if (produtos.length < 1) {
    console.log("Não há produtos cadastrados.");
  }
  // iterar sobre cada produto e exibir suas informações
  produtos.forEach((produto) => {
    console.log(`Lista de produtos: 
  Id: ${produto.id}
  Nome do produto: ${produto.nome}
  Descrição do produto: ${produto.descricao} 
  Preço: ${produto.preco}`);
  });

  const menu = new MenuPrincipal();
  menu.MenuPrincipal();
}

// função para excluir um produto
export async function deletarProduto() {
  // obter o ID do produto a ser excluído
  const idProduto = await excluirProduto();
  // procurar o produto pelo ID
  const produtoExcluido = await Produto.findOne({ where: { id: idProduto } });
  if (produtoExcluido) {
    // excluir o produto do banco de dados
    await Produto.destroy({ where: { id: idProduto } });
    console.log(`Produto ${produtoExcluido.nome} excluído com sucesso.`);
  } else {
    console.log(`Não foi possível encontrar o produto com o ID ${idProduto}.`);
  }

  // mostrar o menu principal após excluir o produto
  const menu = new MenuPrincipal();
  menu.MenuPrincipal();
}

// função para atualizar um produto
export async function updateProduto() {
  // obter as informações atualizadas do produto
  const produto = await atualizarProduto();
  const idProduto = await produto.idProduto;

  // procurar o produto pelo ID
  const produtoEncontrado = await Produto.findOne({ where: { id: idProduto } });

  // verificar se o produto foi encontrado
  if (produtoEncontrado) {
    // atualizar as informações do produto no banco de dados
    await Produto.update(
      {
        nome: produto.novoNome,
        descricao: produto.novaDescricao,
        preco: parseFloat(produto.novoPreco),
      },
      { where: { id: idProduto } }
    );

    console.log(`Produto ${produtoEncontrado.nome} atualizado com sucesso.`);
  } else {
    console.log(
      `Não foi possível encontrar o produto com o ID ${respostas.idProduto}.`
    );
  }

  // mostrar o menu principal após atualizar o produto
  const menu = new MenuPrincipal();
  menu.MenuPrincipal();
}
