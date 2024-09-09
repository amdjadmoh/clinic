const sequelize = require('sequelize');
const db = require('../config/database');
const Result = require('./Result');

const Dep = db.define('dep',{
    depName:{
        type:sequelize.STRING,
        allowNull:false,
    }
},{
    tableName:'departments',
    timestamps:false,
});

module.exports = Dep;
