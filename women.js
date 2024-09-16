// Criando o server
const express = require("express");

// Configurando a rota
const router = express.Router();

const app = express();
const port = 3333;

// Lista de mulheres
const women = [
  {
    name: "Isabelle Jesuino",
    image: "https://avatars.githubusercontent.com/u/96210375?v=4",
    minibio: "Desenvolvedora Front-End",
  },
  {
    name: "Simara Conceição",
    image: "https://bit.ly/3LJIyOF",
    minibio: "Desenvolvedora e instrutora",
  },

  {
    name: "Iana Chan",
    image: "https://bit.ly/3JCXBqP",
    minibio: "CEO & Founder da PrograMaria",
  },

  {
    name: "Luana Pimentel",
    image: "https://bit.ly/3FKpFaz",
    minibio: "Senior Staff Software Engineer",
  },
];

// Função showWomen
function showWomen(request, response) {
  response.json(women);
}

function showPort() {
  console.log("Servidor criado e rodando na porta ", port);
}

// Criar o endereço
app.use(router.get("/women", showWomen));

app.listen(port, showPort);
