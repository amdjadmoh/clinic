const sequelize = require('sequelize');
const db = require('../config/database');
const Result = require('./Result');
const PreDefinedProcedure = require('./PreDefinedProcedure');

const Dep = db.define('dep',{
    depName:{
        type:sequelize.STRING,
        allowNull:false,
    },
    depArabicName:{
        type:sequelize.STRING,
        allowNull:true,
    },
    defaultProcedure:{
        type:sequelize.INTEGER,
        allowNull:true,
    },
},{
    tableName:'departments',
    timestamps:false,
});
Dep.belongsTo(PreDefinedProcedure, { foreignKey: 'defaultProcedure', targetKey: 'id' , onDelete: 'CASCADE' });
PreDefinedProcedure.hasOne(Dep, { foreignKey: 'defaultProcedure' });

Dep.addScope('defaultScope', {
    include: {
        model: PreDefinedProcedure,
        attributes: ['procedureName', 'cost']
    }
});


module.exports = Dep;
