const db = require('../config/database');
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

}, {
    tableName: 'queues',
    timestamps: true,
});

module.exports = Queue;