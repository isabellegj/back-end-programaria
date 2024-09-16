// Criando o server
const express = require("express");

// Configurando a rota
const router = express.Router();

const app = express();
const port = 3333;

// Função showWoman
function showWoman(request, response) {
  response.json({
    name: "Isabelle Jesuino",
    image: "https://avatars.githubusercontent.com/u/96210375?v=4",
    minibio: "Desenvolvedora Front-End",
  });
}

function showPort() {
  console.log("Servidor criado e rodando na porta ", port);
}

// Criar o endereço
app.use(router.get("/woman", showWoman));

app.listen(port, showPort);
