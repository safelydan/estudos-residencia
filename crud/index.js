const express = require("express");
const app = express();
const routes = require("./routes.js");

app.use(express.json());
app.use(routes);

const port = 4567;

app.listen(port, () => {
  console.log(`servidor rodando na porta: ${port}`);
});
