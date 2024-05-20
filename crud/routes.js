const express = require("express");
const UserController = require("./controllers/userController");
const AdressController = require("./controllers/addressController");
const authMiddleware = require('./middlewares/auth');
const courseController = require("./controllers/courseController");
const router = express.Router();

router.get("/users", authMiddleware, UserController.index); // define a rota para listar todos os usuários
router.post("/create-users", UserController.store); // define a rota para criar um novo usuário
router.put("/update/:userId", authMiddleware, UserController.update); // define a rota para atualizar um usuário existente
router.delete("/delete/:userId", authMiddleware, UserController.delete); // define a rota para excluir um usuário existente
router.post("/users/login", UserController.login); // define a rota para realizar o login do usuário

router.get('/users/address', authMiddleware, AdressController.index)
router.post('/users/:userId/address', authMiddleware, AdressController.store)

router.get('/users/:userId/courses', authMiddleware, courseController.index)
router.post('/users/:userId/courses', authMiddleware, courseController.store)

module.exports = router; // exporta o roteador para ser utilizado pelo aplicativo Express