import MenuPrincipal from "../view/menuPrincipal.js";
import { cadastrarProduto, excluirProduto } from "../view/menu.js";
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
    console.log(JSON.stringify(produtos, null, 2));
    
    const menu = new MenuPrincipal()

    menu.MenuPrincipal()
}

export async function deletarProduto(){
    const idProduto = await excluirProduto(); 

    const pacienteExcluido = await Produto.destroy({where: {id: idProduto}});
    console.log(pacienteExcluido.nome);

    const menu = new MenuPrincipal();
    menu.MenuPrincipal();
}