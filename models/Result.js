const db = require ('../config/database');
const Sequelize = require('sequelize');

const Result = db.define('Result', {
    resultTypeID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    resultDescription: {
        type: Sequelize.STRING,
        allowNull: true
    },
    resultAttachment: {
        type: Sequelize.STRING,
        allowNull: true
    },
    patientID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});


module.exports = Result;