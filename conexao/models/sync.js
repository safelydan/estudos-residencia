import sequelize from '../db.js';
import Produto from './model.js';

sequelize.sync().then(()=>{
    console.log('Modelos sincronizados com o banco de dados.');
});

export default Produto;