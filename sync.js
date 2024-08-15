const db = require('./config/database');
const Doctor = require('./models/Doctors');
const Dep = require('./models/Dep');

db.sync({ force: false }) 
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });