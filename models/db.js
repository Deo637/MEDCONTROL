// 📁 models/db.js
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

// Carrega o .env apenas em ambiente local
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

// 🔹 Configuração do Sequelize
const sequelize = new Sequelize(
  // Railway (em produção)
  process.env.MYSQLDATABASE || process.env.DB_NAME,
  process.env.MYSQLUSER || process.env.DB_USER,
  process.env.MYSQLPASSWORD || process.env.DB_PASS,
  {
    host: process.env.MYSQLHOST || process.env.DB_HOST,
    port: process.env.MYSQLPORT || process.env.DB_PORT || 3306,
    dialect: "mysql",
    timezone: "-03:00",
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
  }
);

// 🔹 Teste de conexão
sequelize
  .authenticate()
  .then(() => {
    console.log("[db.js] ✅ Conexão com o banco de dados estabelecida com sucesso.");
  })
  .catch((err) => {
    console.error("[db.js] ❌ Não foi possível conectar ao banco de dados:", err);
  });

module.exports = { Sequelize, sequelize };
