const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.static('public'));

module.exports = app; // Export only the app (No app.listen)
