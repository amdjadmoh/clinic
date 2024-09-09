const Invoice = require('./Invoice');
const Patient = require('./Patient');
const Procedure = require('./PreDefinedProcedure');
const sequelize = require('../config/database');

Invoice.belongsToMany(Procedure, { through: 'InvoiceProcedure', foreignKey: 'invoiceID' });
Procedure.belongsToMany(Invoice, { through: 'InvoiceProcedure', foreignKey: 'procedureID' });



module.exports = { Invoice, Patient, Procedure };