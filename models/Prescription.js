
const sequelize = require('sequelize');
const Patient = require('./Patient');
const Doctor = require('./Doctors');
const db = require('../config/database');


const Prescription = db.define('prescription', {
    patientID: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    doctorID: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    note: {
        type: sequelize.STRING,
        allowNull: true,
    },
}, {
    tableName: 'prescriptions',
    timestamps: true,
});
module.exports = Prescription;

const PrescriptionDetails = require('./PrescriptionDetails');

Prescription.belongsTo(Patient, { foreignKey: 'patientID' });
Prescription.belongsTo(Doctor, { foreignKey: 'doctorID' });
Prescription.hasMany(PrescriptionDetails, { foreignKey: 'prescriptionID' });

Prescription.addScope('defaultScope', {
    include: [
        {
            model: Patient,
            attributes: ['name']
        },
        {
            model: Doctor,
            attributes: ['name']
        }
    ]
});

