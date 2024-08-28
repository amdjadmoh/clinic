const db= require('../config/database');
const sequelize = require('sequelize');7
const Medicine = require('./Medicine');
const Prescription = require('./Prescription');

const PrescriptionDetails = db.define('prescriptionDetails',{
    prescriptionID:{
        type:sequelize.INTEGER,
        allowNull:false,
    },
    medicineID:{
        type:sequelize.INTEGER,
        allowNull:false,
    },
    quantity:{
        type:sequelize.INTEGER,
        allowNull:false,
    },
    note:{
        type:sequelize.STRING,
        allowNull:true,
    }
},{
    tableName:'prescriptionDetails',
    timestamps:true,
});
PrescriptionDetails.belongsTo(Prescription, {foreignKey:'prescriptionID'}); 
PrescriptionDetails.belongsTo(Medicine, {foreignKey:'medicineID'});
PrescriptionDetails.addScope('defaultScope', {
    include: [
        {
            model: Medicine,
            attributes: ['name']
        }
    ]
});

module.exports = PrescriptionDetails;