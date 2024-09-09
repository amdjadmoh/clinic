// const { Sequelize } = require('sequelize');
// module.exports = new Sequelize('postgres://postgres:admin@localhost:5432/clinic') 
// const { Sequelize } = require('sequelize');

// // Example connection string with SQL authentication
// const sequelize = new Sequelize('mssql://clinic:amgedamged2004@@clinicapi.database.windows.net:1433/clinic?encrypt=true&trustServerCertificate=false&hostNameInCertificate=*.database.windows.net&loginTimeout=30');

// module.exports = sequelize;



const { Sequelize } = require('sequelize');

const db = new Sequelize('clinic', 'clinic', 'amgedamged2004@', {
    host: 'clinicapi.database.windows.net',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true, // Use this if you're on Windows Azure
            requestTimeout: 30000, // Increase timeout to 30 seconds
        }
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = db;