import MenuPrincipal from "../view/menuPrincipal.js";
import { cadastrarProduto, excluirProduto, atualizarProduto } from "../view/menu.js";
import Produto from "../models/model.js";


export async function adicionarProduto() {
    const respostas = await cadastrarProduto()
    const preco = parseFloat(respostas.preco);
    const novoProduto = await Produto.create(respostas);

    const menu = new MenuPrincipal()
    menu.MenuPrincipal()
}

export async function listarProdutos(){
    const produtos = await Produto.findAll();
    if(produtos.length < 1){
        console.log('Não há produtos cadastrados.')
    }
    produtos.forEach(produto => {
        console.log(`Lista de produtos: 
  Id: ${produto.id}
  Nome do produto: ${produto.nome}
  Descrição do produto: ${produto.descricao} 
  Preço: ${produto.preco}`)
    });
    
    const menu = new MenuPrincipal()
    
    menu.MenuPrincipal()
    // console.log(JSON.stringify(produtos, null, 2));
}

export async function deletarProduto(){
    const idProduto = await excluirProduto(); 

    const produtoExcluido = await Produto.findOne({where: {id: idProduto}});
    if (produtoExcluido) {
        await Produto.destroy({where: {id: idProduto}});
        console.log(`Produto ${produtoExcluido.nome} excluído com sucesso.`);
    } else {
        console.log(`Não foi possível encontrar o produto com o ID ${idProduto}.`);
    }

    const menu = new MenuPrincipal();
    menu.MenuPrincipal();
}
export async function updateProduto(){
    const produto = await atualizarProduto();
    const idProduto = await produto.idProduto;

    const produtoEncontrado = await Produto.findOne({ where: { id: idProduto } });
    
    if (produtoEncontrado) {
        await Produto.update({
            nome: produto.novoNome,
            descricao: produto.novaDescricao,
            preco: parseFloat(produto.novoPreco)
        }, { where: { id: idProduto } });

        console.log(`Produto ${produtoEncontrado.nome} atualizado com sucesso.`);
    } else {
        console.log(`Não foi possível encontrar o produto com o ID ${respostas.idProduto}.`);
    }

    const menu = new MenuPrincipal();
    menu.MenuPrincipal();
}