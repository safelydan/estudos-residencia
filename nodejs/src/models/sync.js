import sequelize from "../config/database.js";
import User from "./user.js";


sequelize.sync().then(()=> {
    console.log('Modelos sincronizados com sucesso.')
}).catch(err => {
    console.error(`Erro ao sincronizar modelos: ${err}` )
})

export default {User};