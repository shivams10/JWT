import Joi from 'joi';

export const userRegisterValidation = (request, response, next) => {
	const schema = Joi.object({
		fullName: Joi.string().min(3).max(100).required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(8).alphanum().required(),
	});
	const { error, value } = schema.validate(request.body);
	if (error) {
		return response.status(400).json({ message: 'Bad request', error });
	}
	next();
};

export const userLoginValidate = (request, response, next) => {
	const schema = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(8).alphanum().required(),
	});
	const {error, value} = schema.validate(request.body);
	if(error){
		return response.status(400).json({ message: 'Bad request', error });
	}
	next();
};
