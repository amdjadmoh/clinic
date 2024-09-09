const ChronicDisease = require('./ChronicDisease');
const Patient = require('./Patient');



// Define the many-to-many relationship
ChronicDisease.belongsToMany(Patient, { through: 'PatientChronic', onDelete: 'cascade', onUpdate: 'cascade' });
Patient.belongsToMany(ChronicDisease, { through: 'PatientChronic', onDelete: 'cascade', onUpdate: 'cascade' });
console.log(Patient.associations);
console.log(ChronicDisease.associations);
module.exports = { Patient, ChronicDisease };
