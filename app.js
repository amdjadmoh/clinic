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
const ChronicDiseasesRoutes = require('./routes/chronicDiseases');
const PreDefinedProcedureRoutes = require('./routes/PreDefinedProcedure');
const InvoiceRoutes = require('./routes/Invoice');
const ProcedureRoutes = require('./routes/patientProcedure');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Database

app.use('/getfile', express.static(path.join(__dirname, 'results')));

// Handle dynamic file requests
app.get('/getfile/:file', (req, res) => {
    const fileName = req.params.file;
    const filePath = path.join(__dirname, 'results', fileName);
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('File not found');
        }
    });
});app.use('/users',usersroutes);
app.use('/doctors',doctorsroutes);
app.use('/dep',deproutes);
app.use('/patient',patientroutes);
app.use('/queue',queueroutes);
app.use('/appointment',appointmentroutes);
app.use('/medicalRecord',medicalRecordroutes);
app.use('/prescription',prescriptionroutes);
app.use('/medicine',medicineRoutes);
app.use('/prescriptionDetails',prescriptionDetailsRoutes);
app.use('/chronicDiseases', ChronicDiseasesRoutes);
app.use('/preDefinedProcedure', PreDefinedProcedureRoutes);  
app.use('/invoices', InvoiceRoutes);
app.use('/procedure',ProcedureRoutes);
app.use('/resultType',require('./routes/resultType'));
app.use('/result',require('./routes/results'));
    
// Catch-all route for undefined routes
app.use((req, res, next) => {
    res.status(404).send({ error: 'Route not found' });
});
app.use(globalErrorHandler);

 module.exports = app;