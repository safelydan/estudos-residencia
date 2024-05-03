import inquirer from "inquirer";
import Fabricante from "../models/fabricante.js";
import { cadastrarFabricante } from "../view/menusInternos.js";
import mainMenu from "../view/menuPrincipal.js";

export async function adicionarFabricante(){
    const respostas = await cadastrarFabricante();

    const novoFabricante = await Fabricante.create({
        nome: respostas.nome
    })

    console.log('Fabricante cadastrado com sucesso');

    mainMenu();
}

export async function listarFabricantes(){
    const fabricantes = await Fabricante.findAll()

    fabricantes.forEach((fabricante) => {
        console.log(`Lista de fabricantes:
Id: ${fabricante.id}
Nome: ${fabricante.nome}`)
    })
    mainMenu();
}
