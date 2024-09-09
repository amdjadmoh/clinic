const db = require('../config/database');
const sequelize = require('sequelize');
const Procedure = require('./PreDefinedProcedure');
const Patient = require('./Patient');

const Invoice = db.define('invoice',{
    invoiceId:{
        type:sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    invoiceAmount:{
        type:sequelize.FLOAT,
        defaultValue:0,
    },
    invoiceStatus:{
        type:sequelize.STRING,
        allowNull:false,
        defaultValue:'unpaid',
        allowedValues:['paid','unpaid'],
    },
    patientID:{
        type:sequelize.INTEGER,
        allowNull:false,
    },
},{
    tableName:'invoices',
    timestamps:true,
});

module.exports = Invoice;