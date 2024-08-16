const db= require('../config/database');
const { Sequelize } = require('sequelize');

const Patient = db.define('patient',{
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    gender :{ 
        type:Sequelize.STRING,
        allowNull:false,
    },
    birthdate:{
        type:Sequelize.DATE,
        allowNull:false,
    },
    phone1:{
        type:Sequelize.STRING,
        },
    phone2:{
        type:Sequelize.STRING,
    },    
    email:{
        type:Sequelize.STRING,
    },
    address:{
        type:Sequelize.STRING,
    }
},{ 
    tableName:'patients',
    timestamps:false,
});

module.exports= Patient;