// Criando o server
const express = require("express"); // iniciando o express

// Configurando a primeira parte da rota
const router = express.Router();

// Importando uuid
const { v4: uuidv4 } = require("uuid");

const app = express(); // Iniciando o app
app.use(express.json()); // Tratando as requisições
const port = 3333; // criando a porta

// Lista inicial de mulheres
const women = [
  {
    id: "1",
    name: "Isabelle Jesuino",
    image: "https://avatars.githubusercontent.com/u/96210375?v=4",
    minibio: "Desenvolvedora Front-End",
  },
  {
    id: "2",
    name: "Simara Conceição",
    image: "https://bit.ly/3LJIyOF",
    minibio: "Desenvolvedora e instrutora",
  },

  {
    id: "3",
    name: "Iana Chan",
    image: "https://bit.ly/3JCXBqP",
    minibio: "CEO & Founder da PrograMaria",
  },

  {
    id: "4",
    name: "Luana Pimentel",
    image: "https://bit.ly/3FKpFaz",
    minibio: "Senior Staff Software Engineer",
  },
];

// GET
function showWomen(request, response) {
  response.json(women);
}

// POST
function createWoman(request, response) {
  const newWoman = {
    id: uuidv4(),
    name: request.body.name,
    image: request.body.image,
    minibio: request.body.minibio,
  };

  women.push(newWoman);

  response.json(women);
}

// Função PORTA
function showPort() {
  console.log("Servidor criado e rodando na porta ", port);
}

// Configuração rota GET /women
app.use(router.get("/women", showWomen));

// Configuração rota POST /women
app.use(router.post("/women", createWoman));

app.listen(port, showPort); // Servidor ouvindo a porta
