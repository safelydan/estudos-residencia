const Sequelize = require("sequelize");
const dbConfig = require("./config.js");
const User = require("../models/User.js");
const Address = require("../models/Address.js");
const Course = require('../models/Course.js');
const UserCourse = require("../models/UserCourse.js");
const { development } = dbConfig;

const connection = new Sequelize(
  development.database,
  development.username,
  development.password,
  {
    host: development.host,
    port: development.port,
    dialect: development.dialect,
    logging: development.logging,
  }
);

// Testar a conexão com o banco de dados
async function testConnection() {
  try {
    await connection.authenticate();
    console.log("Conexão bem-sucedida com o banco de dados.");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
}

User.init(connection);
Address.init(connection);
Course.init(connection);

User.associate(connection.models);
Address.associate(connection.models); // Certifique-se de incluir a associação de Address aqui
Course.associate(connection.models);


// Chamar a função para testar a conexão
testConnection();
