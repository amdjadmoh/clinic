const resultType = require('../models/ResultType');
const result = require('../models/Result');
const patient = require('./Patient');
result.belongsTo(resultType, {
    foreignKey: 'resultTypeID'
});
resultType.hasMany(result, {
    foreignKey: 'resultTypeID',
});

result.belongsTo(patient,{foreignKey:'patientID'});

result.addScope('defaultScope', {
    include: [
        {
            model: patient,
            attributes: ['name'],
        },
        {
            model: resultType,
            attributes: ['resultName','resultDep','resultDescription'],
        }
    ],
});
module.exports = { resultType, result };