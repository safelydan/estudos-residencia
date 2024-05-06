import Sequelize from "sequelize"; 
import { fileURLToPath } from "url"; 
import { dirname } from "path"; 
import dotenv from "dotenv";

// obtendo o nome do arquivo e diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// configurando o dotenv para carregar variáveis de ambiente do arquivo .env
dotenv.config({ path: `${__dirname}/.env` });

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