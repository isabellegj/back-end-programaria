const express = require("express"); // iniciando o express
const router = express.Router(); // Configurando a primeira parte da rota
const { v4: uuidv4 } = require("uuid"); // Importando uuid

const connectDatabase = require("./database"); // Importando a função connectDatabase
connectDatabase(); // Chamando a função que conecta o BD

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

// PATCH
function patchWoman(request, response) {
  function findWoman(woman) {
    if (woman.id === request.params.id) {
      return woman;
    }
  }

  const findedWoman = women.find(findWoman);

  if (request.body.name) {
    findedWoman.name = request.body.name;
  }

  if (request.body.image) {
    findedWoman.image = request.body.image;
  }

  if (request.body.minibio) {
    findedWoman.minibio = request.body.minibio;
  }

  response.json(women);
}

// DELETE
function deleteWoman(request, response) {
  function allExceptHer(woman) {
    if (woman.id !== request.params.id) {
      return woman;
    }
  }

  const remainWomen = women.filter(allExceptHer);

  response.json(remainWomen);
}

// Função PORTA
function showPort() {
  console.log("Servidor criado e rodando na porta ", port);
}

app.use(router.get("/women", showWomen)); // Configuração rota GET /women
app.use(router.post("/women", createWoman)); // Configuração rota POST /women
app.use(router.patch("/women/:id", patchWoman)); // Configuração da rota PATCH /women/:id
app.use(router.delete("/women/:id", deleteWoman)); // Configuração da rota DETELE /women/:id

app.listen(port, showPort); // Servidor ouvindo a porta
