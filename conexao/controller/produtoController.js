import {menuPrincipal} from "../view/menuIntermediario.js";
import {
  cadastrarProduto,
  excluirProduto,
  atualizarProduto,
} from "../view/menusInternos.js";
import Produto from "../models/produto.js";
import Fabricante from "../models/fabricante.js";
import {mainMenu} from "../view/menuPrincipal.js";

export async function adicionarProduto() {
  // obter as respostas do formulário de cadastro de produto
  const respostas = await cadastrarProduto();
  // converter o preço para número
  const preco = parseFloat(respostas.preco);

  const nomeFabricante = await Fabricante.findOne({
    where: { nome: respostas.nomeFabricante },
  });
  if (nomeFabricante) {
    // Se o fabricante existir, criar um novo objeto de produto com base nas respostas
    const novoProduto = await Produto.create({
      nome: respostas.nome,
      descricao: respostas.descricao,
      preco: preco,
      fabricanteId: nomeFabricante.id, // Definir o ID do fabricante no novo produto
    });
    console.log("Produto cadastrado com sucesso!");
  } else {
    console.log("Fabricante não encontrado.");
  }

  // mostrar o menu principal após adicionar o produto

  mainMenu();
}

export async function listarProdutos() {
  try {
    // Obter todos os produtos cadastrados
    const produtos = await Produto.findAll();

    if (produtos.length < 1) {
      console.log("Não há produtos cadastrados.");
    } else {
      // Iterar sobre cada produto e exibir suas informações
      console.log('Lista de produtos:')
      for (const produto of produtos) {
        // Carregar o fabricante associado a cada produto de forma assíncrona (lazy loading)
        const fabricante = await produto.getFabricante();

        console.log(`Id: ${produto.id}
  Nome do produto: ${produto.nome}
  Descrição do produto: ${produto.descricao} 
  Preço: ${produto.preco}
  Fabricante: ${fabricante ? fabricante.nome : "Sem fabricante"}`);
      }
    }
  } catch (error) {
    console.error("Erro ao listar produtos:", error);
  }

  mainMenu();
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
    console.log(`Produto excluído com sucesso.`);
  } else {
    console.log(`Não foi possível encontrar o produto com o ID ${idProduto}.`);
  }

  // mostrar o menu principal após excluir o produto
  mainMenu();
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
  mainMenu();
}
