import UserModel from '../models/userModel.js';
import bCrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

// * 1. validate request body -> 2. create mongoDB UserModel -> 3. Do password encryption ->
// * 4. Save data in MongoDB -> 5. return response to the client
export const registerUser = async (request, response) => {
	const userModel = new UserModel(request.body);
	userModel.password = await bCrypt.hash(request.body.password, 10);
	try {
		const mongoResponse = await userModel.save();
		mongoResponse.password = undefined;
		return response
			.status(201)
			.json({ message: 'success', data: mongoResponse });
	} catch (error) {
		return response.status(500).json({ message: 'error', error });
	}
};

// * 1. Check user using email -> 2. compare password -> 3. create JWT token -> 4. send response to client
export const loginUser = async (request, response) => {
	try {
		const user = await UserModel.findOne({ email: request.body.email });
		if (!user) {
			unAuthorizedResponse(response);
			return;
		}
		const isPasswordEqual = await bCrypt.compare(
			request.body.password,
			user.password
		);
		if (!isPasswordEqual) {
			unAuthorizedResponse(response);
			return;
		}
		const tokenObject = {
			_id: user._id,
			fullName: user.fullName,
			email: user.email,
		};
		const jwt = jsonwebtoken.sign(tokenObject, process.env.SECRET_KEY, {
			expiresIn: '4h',
		});
		return response.status(200).json({ jwt, tokenObject });
	} catch (error) {
		return response.status(500).json({ message: 'error', error });
	}
};
