import sequelize from "../teste/db.js"
import Produto from "./models/produto.js"
import Fabricante from "./models/fabricante.js"

(async () => {
    // const novoFabricante = await Fabricante.create({
    //     nome: 'Apple'
    // })
    // console.log(novoFabricante)

    // const novoProduto = await Produto.create({
    //     nome: "Macbook",
    //     preco: 10000,
    //     descricao: "Notebook apple",
    //     FabricanteId: novoFabricante.id
    // })
    // console.log(novoProduto)

    const produto = await Produto.findByPk(1, {include: Fabricante})
    // const produtos = await Produto.findAll({include: Fabricante})
    console.log(produto)
})()