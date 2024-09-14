const Invoice = require('./Invoice');
const Patient = require('./Patient');
const Procedure = require('./PreDefinedProcedure');
const db = require('../config/database');
const sequelize = require('sequelize');


const InvoiceProcedure = db.define(
    'InvoiceProcedure',
    {
        quantity: {
        type: sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    { timestamps: false },
);
Invoice.belongsToMany(Procedure, { through: 'InvoiceProcedure', foreignKey: 'invoiceID' });
Procedure.belongsToMany(Invoice, { through: 'InvoiceProcedure', foreignKey: 'procedureID' });



module.exports = { Invoice, Patient, Procedure };