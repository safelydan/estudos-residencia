import Sequelize from 'sequelize';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: `${__dirname}/.env` });

const sequelize = new Sequelize(process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,{
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT,
        logging: false
    }
);

console.log('Banco conectado!');

export default sequelize;
