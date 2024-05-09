const express = require("express");
const UserController = require("./controllers/userController");
const router = express.Router();

router.get("/users", UserController.index);

router.post("/create-users", UserController.store);

router.put("/update/:userId", UserController.update);

router.delete("/delete/:userId", UserController.delete);

router.post("/users/login", UserController.login);

module.exports = router;
