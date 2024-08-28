const db = require('./config/database');
const Queue = require('./models/Queue');

const Doctor = require('./models/Doctors');
const Dep = require('./models/Dep');
const Users= require('./models/Users');
const Patient = require('./models/Patient');
const Appointment = require('./models/Appointment');
const MedicalRecord = require('./models/MedicalRecord');
const Prescription = require('./models/Prescription');
const PrescriptionDetails = require('./models/PrescriptionDetails');
const Medicine = require('./models/Medicine');

db.sync({ force: true }) 
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });