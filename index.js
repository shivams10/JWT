import express from 'express';
import routes from './routes/index.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
import './config/db.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(PORT, () => {
	console.log('app is running on Port: ', PORT);
});
