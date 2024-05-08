const express = require('express');
const UserController = require('./controllers/userController');
const router = express.Router();


router.get('/users', UserController.index)

router.post('/create-users', UserController.store)

router.put('/update/:userId', UserController.update)

module.exports = router;