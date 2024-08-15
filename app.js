const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const usersroutes = require('./routes/users');
const doctorsroutes = require('./routes/doctors');
deproutes=require('./routes/deps');
const globalErrorHandler = require('./controller/errorController');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Database

app.use('/users',usersroutes);
app.use('/doctors',doctorsroutes);
app.use('/dep',deproutes);

app.use(globalErrorHandler);

 module.exports = app;