const db = require('./config/database');
const Doctor = require('./models/Doctors');
const Dep = require('./models/Dep');
const Users= require('./models/Users');
const Patient = require('./models/Patient');
const Queue = require('./models/Queue');

db.sync({ force: false }) 
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });