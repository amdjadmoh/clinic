const db= require('../config/database');
const sequelize = require('sequelize');

const Medicine = db.define('medicine',{
    medicineName:{
        type:sequelize.STRING,
        allowNull:false,
    },
    description:{
        type:sequelize.STRING,
        allowNull:true,
    },
},{
    tableName:'medicines',
    timestamps:false,
});

module.exports = Medicine;