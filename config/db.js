import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const url = process.env.MONGO_URL;

mongoose
	.connect(url)
	.then((data) => {
		console.log('Mongo Db connected');
	})
	.catch((error) => {
		console.log('Error while mongo db connection: ', error);
	});
