const sequelize = require('sequelize');
const db = require('../config/database');
const Patient = require('./Patient');
const Invoice = require('./Invoice');
const Procedure = require('./PreDefinedProcedure');

Invoice.belongsTo(Patient, { foreignKey: 'patientID' });
Patient.hasMany(Invoice, { foreignKey: 'patientID' });

Invoice.addScope('defaultScope',{
    include:[{
        model:Patient,
        attributes:['name','email','phone1','address','birthdate']
    },
    {
        model:Procedure,
        attributes:['procedureName','cost']
    }]
})

module.exports = { Patient, Invoice };