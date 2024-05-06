import express from 'express'
import router from './routes.js'
import sequelize from '../../conexao/db.js'

const app = express()

app.use(express.json())
app.use(router)

const port = 3030

app.listen(port, ()=> {
    console.log(`Servidor rodando na porta ${port}`)
})