const unAuthorizedResponse = (response) => {
	return response
		.status(401)
		.json({ message: 'Authentication failed, Invalid email/password' });
};
