const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const usersroutes = require('./routes/users');
const doctorsroutes = require('./routes/doctors');
const patientroutes = require('./routes/patient');
const deproutes=require('./routes/deps');
const queueroutes = require('./routes/queue');
const appointmentroutes = require('./routes/appointment');
const medicalRecordroutes = require('./routes/medicalRecord');
const prescriptionroutes = require('./routes/prescription');
const medicineRoutes = require('./routes/medicine');
const prescriptionDetailsRoutes=require('./routes/prescriptionDetails');
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
app.use('/appointment',appointmentroutes);
app.use('/medicalRecord',medicalRecordroutes);
app.use('/prescription',prescriptionroutes);
app.use('/medicine',medicineRoutes);
app.use('/prescriptionDetails',prescriptionDetailsRoutes);
    
// Catch-all route for undefined routes
app.use((req, res, next) => {
    res.status(404).send({ error: 'Route not found' });
});
app.use(globalErrorHandler);

 module.exports = app;