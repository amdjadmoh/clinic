const sequelize = require ('sequelize');
const db = require ('../config/database');
const Dep = require('./Dep');

const Doctors = db.define('doctors',{
    name:{
        type:sequelize.STRING,
        allowNull:false,
    },
    depID:{
        type:sequelize.INTEGER,
        allowNull:false,
    },
    email:{
        type:sequelize.STRING,
    },
    speciality:{
        type:sequelize.STRING,
        allowNull:false,
    },
    phone:{
        type:sequelize.STRING,
    },
    address:{
        type:sequelize.STRING,
    }
},{
    tableName:'doctors',
    timestamps:false,
});

Doctors.belongsTo(Dep, {foreignKey:'depID'});
module.exports = Doctors;