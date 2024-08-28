const db = require('../config/database');
const Patient = require('./Patient');
const Doctor = require('./Doctors');
const Dep = require('./Dep');
const { Sequelize } = require('sequelize');

const Queue = db.define('queue', {
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'pending',
        validate: {
            isIn: {
                args: [['pending', 'completed', 'waiting']],
                msg: "Status must be one of 'pending', 'completed', or 'waiting'"
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
    queueNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        validate: {
            isDate: true,
        }
    }
}, {
    tableName: 'queues',
    timestamps: true,
});

Queue.belongsTo(Dep, { foreignKey: 'depID' });
Queue.belongsTo(Patient, { foreignKey: 'patientID' });
Queue.addScope('defaultScope', {
    include: {
        model: Patient,
        attributes: ['name']
    }
});
module.exports = Queue;