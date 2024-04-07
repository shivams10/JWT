const express = require('express');
const { registerUser, loginUser } = require('../userController');
const { userRegisterValidation } = require('../utils/userValidation');
const routes = express.Router();

// Routes
routes.post('/register', userRegisterValidation, registerUser);
routes.post('/login', loginUser);

module.exports = routes;
