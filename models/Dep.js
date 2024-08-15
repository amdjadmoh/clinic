const sequelize = require('sequelize');
const db = require('../config/database');

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