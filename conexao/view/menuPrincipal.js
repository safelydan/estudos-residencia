import inquirer from "inquirer";
import {menuPrincipal} from "./menuIntermediario.js";
import { menuFabricantes } from "./menuIntermediario.js";

export async function mainMenu() {
  const respostas = await inquirer.prompt([
    {
      type: "list",
      name: "opcao",
      message: "O que você deseja fazer? ",
      choices: [
        "1-Menu Produtos",
        "2-Menu Fabricantes",
        "3-Menu Categorias",
        "4-Sair",
      ],
    },
  ]);
  switch (respostas.opcao) {
    case "1-Menu Produtos":
      menuPrincipal();
      break;
    case "2-Menu Fabricantes":
      menuFabricantes();
      break;
    case "3-Menu Categorias":
      menuCategorias();
      break;
    case "4-Sair":
      console.log("Fim...");
      break;
  }
}

export default mainMenu;