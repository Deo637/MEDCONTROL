// Arquivo: models/db.js (VERSÃO FINAL DE PRODUÇÃO)

const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config()
// Carrega o .env (só para testes locais)
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER,   process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    timezone: '-03:00',
    dialectOptions: {
        dateStrings: true,
        typeCast: true
const sequelize = new Sequelize(
    // 1º: Procura a variável da Railway (MYSQLDATABASE)
    // 2º: Se não encontrar, procura a variável local (DB_NAME)
    process.env.MYSQLDATABASE || process.env.DB_NAME,
    process.env.MYSQLUSER || process.env.DB_USER,
    process.env.MYSQLPASSWORD || process.env.DB_PASS,
    {
        host: process.env.MYSQLHOST || process.env.DB_HOST,
        port: process.env.MYSQLPORT || process.env.DB_PORT || 3306,
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
