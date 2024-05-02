import sequelize from "./db.js"
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
    //     fabricanteId: novoFabricante.id
    // })
    // console.log(novoProduto)

    // const produto = await Produto.findByPk(1, {include: Fabricante})
    const produto = await Produto.findAll({include: Fabricante})
    const produtosJSON = produto.map(produto => produto.toJSON());
    console.log(produtosJSON);
})()