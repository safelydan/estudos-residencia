const express = require("express");
const UserController = require("./controllers/userController");
const router = express.Router();
router.get("/users", UserController.index); // Define a rota para listar todos os usuários
router.post("/create-users", UserController.store); // Define a rota para criar um novo usuário
router.put("/update/:userId", UserController.update); // Define a rota para atualizar um usuário existente
router.delete("/delete/:userId", UserController.delete); // Define a rota para excluir um usuário existente
router.post("/users/login", UserController.login); // Define a rota para realizar o login do usuário

module.exports = router; // Exporta o roteador para ser utilizado pelo aplicativo Express