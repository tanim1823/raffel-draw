const express = require('express');
const { notFoundHandler, errorHandler } = require('./error');
const middleware = require('./middleware');
const routes = require('./routes');
require('dotenv').config();
const app = express();

app.use(middleware);



app.use("/" ,routes);
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;

