const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('med_control', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00',
    dialectOptions: {
        dateStrings: true,
        typeCast: true
require('dotenv').config();

const sequelize = new Sequelize(
    
    process.env.MYSQLDATABASE || process.env.DB_NAME,
    process.env.MYSQLUSER || process.env.DB_USER,
    process.env.MYSQLPASSWORD || process.env.DB_PASS,
    {
        host: process.env.MYSQLHOST || process.env.DB_HOST,
        port: process.env.MYSQLPORT || 3306,
        dialect: 'mysql',
        timezone: '-03:00', 
        dialectOptions: {
            dateStrings: true,
            typeCast: true
        }
    }
});
);

sequelize.authenticate()
    .then(() => {
        console.log('[db.js] Conexão com o banco de dados foi estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('[db.js] Não foi possível conectar ao banco de dados:', err);
    });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
