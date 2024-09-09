const db = require ('../config/database');
const Sequelize = require('sequelize');

const ResultType = db.define('ResultType', {
    resultName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    resultDep:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    resultDescription: {
        type: Sequelize.STRING,
        allowNull: true
    },
},
    {
    tableName:'resultTypes',
    timestamps:false,
});
const Dep = require('./Dep');
ResultType.belongsTo(Dep);
module.exports = ResultType;