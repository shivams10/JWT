import express from 'express';
import { registerUser, loginUser } from '../userController/index.js';
import {
	userLoginValidate,
	userRegisterValidation,
} from '../utils/userValidation.js';
const routes = express.Router();

// Routes
routes.post('/register', userRegisterValidation, registerUser);
routes.post('/login', userLoginValidate, loginUser);

export default routes;
