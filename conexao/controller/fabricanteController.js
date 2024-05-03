import inquirer from "inquirer";
import Fabricante from "../models/fabricante.js";
import { cadastrarFabricante, excluirFabricante } from "../view/menusInternos.js"; // importando funções relacionadas aos menus internos
import mainMenu from "../view/menuPrincipal.js";

// função para adicionar um novo fabricante
export async function adicionarFabricante(){
    // solicita informações para cadastrar um novo fabricante
    const respostas = await cadastrarFabricante();

    // cria um novo fabricante com as informações fornecidas
    const novoFabricante = await Fabricante.create({
        nome: respostas.nome
    });

    // exibe uma mensagem de confirmação
    console.log('Fabricante cadastrado com sucesso');

    // volta para o menu principal
    mainMenu();
}

// função para listar todos os fabricantes
export async function listarFabricantes(){
    // busca todos os fabricantes no banco de dados
    const fabricantes = await Fabricante.findAll();

    // exibe os dados de cada fabricante
    fabricantes.forEach((fabricante) => {
        console.log(`Lista de fabricantes:
Id: ${fabricante.id}
Nome: ${fabricante.nome}`);
    });

    // volta para o menu principal
    mainMenu();
}

// função para deletar um fabricante existente
export async function deletarFabricante(){
    // solicita o ID do fabricante a ser excluído
    const idFabricante = await excluirFabricante();

    // busca o fabricante pelo ID
    const fabricanteASerExcluido = Fabricante.findOne({where: {id: idFabricante}});

    // verifica se o fabricante foi encontrado
    if(fabricanteASerExcluido){
        // exclui o fabricante do banco de dados
        await Fabricante.destroy({where: {id: idFabricante}});
        console.log(`Produto ${fabricanteASerExcluido.nome} excluído com sucesso.`);
    }else{
        console.log('Não foi possível encontrar um fabricante com o ID informado.');
    }

    // volta para o menu principal
    mainMenu();
}
