const db = require('./config/database');
// const Queue = require('./models/Queue');
// const Doctor = require('./models/Doctors');
// const Dep = require('./models/Dep');

const ResultResultType = require('./models/ResultResultType');
// const Users= require('./models/Users');
// const Appointment = require('./models/Appointment');
// const MedicalRecord = require('./models/MedicalRecord');
// const Prescription = require('./models/Prescription');
// const PrescriptionDetails = require('./models/PrescriptionDetails');
// const Medicine = require('./models/Medicine');
// const PreDefinedProcedure = require('./models/PreDefinedProcedure');
// const Inovice = require('./models/Invoice');
// const ChronicDisease = require('./models/ChronicDisease');
// const Patient = require('./models/Patient');
// require('./models/InovicePatient');
// require('./models/PatientChronicDiseases');
// require('./models/InvoiceProcedure');




db.sync({ alter: true }) 
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });