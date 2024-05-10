const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth.json");

module.exports = (req, res, next) => { // define um middleware de autenticação que será exportado para ser utilizado em rotas protegidas
  const authHeader = req.headers.authorization; // obtém o cabeçalho de autorização da requisição HTTP

  // verifica se o cabeçalho de autorização não foi fornecido na requisição
  if (!authHeader) {
    return res.status(400).send({ msg: "Token não fornecido" }); // retorna um erro indicando que o token não foi fornecido
  }

  const parts = authHeader.split(' '); // divide o cabeçalho de autorização em duas partes separadas por espaço em branco

  // verifica se o cabeçalho de autorização não foi dividido corretamente em duas partes
  if (!parts.length === 2) {
    return res.status(400).send({ msg: "Erro no Token" }); // retorna um erro indicando um problema com o token
  }

  const [scheme, token] = parts; // extrai o esquema de autenticação e o token JWT das partes divididas

  // verifica se o esquema de autenticação não começa com "Bearer" (insensível a maiúsculas e minúsculas)
  if (!/^Bearer/i.test(scheme)) {
    return res.status(400).send({ msg: "Token mal formatado" }); // retorna um erro indicando que o token está mal formatado
  }

  // verifica a validade do token JWT utilizando a chave secreta definida no arquivo auth.json
  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(400).send({ error: 'Token inválido'}); // retorna um erro indicando que o token é inválido

    req.userId = decoded.id; // define o ID do usuário decodificado a partir do token JWT na requisição
    console.log(decoded.id); // imprime o ID do usuário decodificado (para depuração)
    
    return next(); // chama o próximo middleware na pilha
  });
};