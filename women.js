const express = require("express"); // iniciando o express
const router = express.Router(); // Configurando a primeira parte da rota
const cors = require("cors"); // Importando o cors, que permite consumir essa api no front-end

const connectDatabase = require("./database"); // Importando a função connectDatabase
connectDatabase(); // Chamando a função que conecta o BD

const Woman = require("./womanModel"); // Importando Schema

const app = express(); // Iniciando o app
app.use(express.json()); // Tratando as requisições
app.use(cors());

const port = 3333; // criando a porta

// GET
async function showWomen(request, response) {
  try {
    const womenFromDatabase = await Woman.find();

    response.json(womenFromDatabase);
  } catch (erro) {
    console.log(erro);
  }
}

// POST
async function createWoman(request, response) {
  const newWoman = new Woman({
    name: request.body.name,
    image: request.body.image,
    minibio: request.body.minibio,
    quote: request.body.quote,
  });

  try {
    const createdWoman = await newWoman.save();
    response.status(201).json(createdWoman);
  } catch (erro) {
    console.log(erro);
  }
}

// PATCH
async function patchWoman(request, response) {
  try {
    const findedWoman = await Woman.findById(request.params.id);

    if (request.body.name) {
      findedWoman.name = request.body.name;
    }

    if (request.body.image) {
      findedWoman.image = request.body.image;
    }

    if (request.body.minibio) {
      findedWoman.minibio = request.body.minibio;
    }

    if (request.body.quote) {
      findedWoman.quote = request.body.quote;
    }

    const updatedWoman = await findedWoman.save();

    response.json(updatedWoman);
  } catch (erro) {
    console.log(erro);
  }
}

// DELETE
async function deleteWoman(request, response) {
  try {
    await Woman.findByIdAndDelete(request.params.id);
    response.json({ message: "Mulher deletada com sucesso!" });
  } catch (erro) {
    console.log(erro);
  }
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
