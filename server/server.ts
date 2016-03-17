/// <reference path="../typings/main.d.ts" />

import express = require('express');
import helmet = require('helmet');
import mongoose = require('mongoose');
import bodyParser = require('body-parser');

import { routes } from './config/routes';

let port = 9876;
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());

routes(app);

mongoose.connect('mongodb://localhost/mongoose-example');
mongoose.connection.once('open', () => {
	console.log('now connected to db mongoose-example at mongodb://localhost:27017');
});

app.listen(port, () => {
	console.log('Express app running at http://localhost:%s', port);
});