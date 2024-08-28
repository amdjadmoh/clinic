const sequelize = require('sequelize');
const db = require('../config/database');
const Patient = require('./Patient');
const Doctor = require('./Doctors');

const MedicalRecord = db.define('medicalRecord', {
    patientID: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    doctorID: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    diagnosis: {
        type: sequelize.STRING,
        allowNull: false,
    },
    treatment: {
        type: sequelize.STRING,
        allowNull: false,
    },
}, {
    tableName: 'medicalRecords',
    timestamps: true,
});
MedicalRecord.belongsTo(Patient, { foreignKey: 'patientID' });
MedicalRecord.belongsTo(Doctor, { foreignKey: 'doctorID' });

MedicalRecord.addScope('defaultScope', {
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


module.exports = MedicalRecord;