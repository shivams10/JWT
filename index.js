const express = require('express');
const jwt = require('jsonwebtoken');
const routes = require('./routes');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./config/db');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use('/api/v1', routes);

app.listen(PORT, () => {
	console.log('app is running on Port: ', PORT);
});
