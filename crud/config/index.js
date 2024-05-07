const Sequelize = require('sequelize');
const dbConfig = require('./config.js');


const { development } = dbConfig;

const connection = new Sequelize(
  development.database,
  development.username,
  development.password,
  {
    host: development.host,
    port: development.port,
    dialect: development.dialect,
    logging: development.logging
  }
);

// Testar a conexão com o banco de dados
async function testConnection() {
  try {
    await connection.authenticate();
    console.log('Conexão bem-sucedida com o banco de dados.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

// Chamar a função para testar a conexão
testConnection();
