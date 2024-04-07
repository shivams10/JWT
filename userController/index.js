import UserModel from '../models/userModel.js';
import bCrypt from 'bcrypt';

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

export const loginUser = (request, response) => {
	return response.send('Login success');
};
