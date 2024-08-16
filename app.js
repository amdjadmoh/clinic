const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const usersroutes = require('./routes/users');
const doctorsroutes = require('./routes/doctors');
const patientroutes = require('./routes/patient');
const deproutes=require('./routes/deps');
const queueroutes = require('./routes/queue');
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
app.use('/patient',patientroutes);
app.use('/queue',queueroutes);

app.use(globalErrorHandler);

 module.exports = app;