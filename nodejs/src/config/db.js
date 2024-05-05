import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    // logging: false,
})

async function testarConexao() {
    try {
        await sequelize.authenticate();
        console.log('Conexão bem-sucedida com o banco de dados');
    } catch (error) {
        console.error('Erro ao conectar com o banco de dados:', error);
    }
}

testarConexao();

export default sequelize;