const database = require('../config/database');
const db= require('../config/database');
const Patient = require('./Patient');
const Doctor = require('./Doctors');
const Dep = require('./Dep');
const { Sequelize } = require('sequelize');

const Appointment = db.define('appointment', {
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'pending',
        validate: {
            isIn: {
                args: [['pending', 'completed']],
                msg: "Status must be one of 'pending', 'completed' "
            }
        }
    },
    patientID: {
        type: Sequelize.INTEGER,
        allowNull: false,

    },
    depID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    doctorID: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },

}, {
    tableName: 'appointments'
});

Appointment.belongsTo(Doctor, { foreignKey: 'doctorID' });
Appointment.belongsTo(Dep, { foreignKey: 'depID' });
Appointment.belongsTo(Patient, { foreignKey: 'patientID' });
Appointment.addScope('defaultScope', {
    include: {
        model: Patient,
        attributes: ['name']
    }
});
module.exports = Appointment;