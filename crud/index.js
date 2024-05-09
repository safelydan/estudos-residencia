const express = require("express");
const app = express();

const routes = require("./routes.js"); // importa as rotas do arquivo routes.js
require("./config"); // importa a configuração do banco de dados

app.use(express.json()); // permite o uso de JSON nas requisições
app.use(routes); // utiliza as rotas definidas no arquivo routes.js

const port = 4567; // define a porta em que o servidor irá escutar

app.listen(port, () => {
  console.log(`servidor rodando na porta: ${port}`);
});
