// Vá no pacote express e guarde todos os poderes de servidor do node na constante express
const express = require("express");

// Configurando a rota
const router = express.Router();

// Chame a função express() para criar uma aplicação e guarde na constante app
const app = express();

// Defina o número da porta
const port = 3333;

// Função para mostrar o Hello
function showHello(request, response) {
  response.send("Hello, world!");
}

// Defina a função showPort()
function showPort() {
  console.log("Servidor criado e rodando na porta ", port);
}

// Definindo o endereço a ser enviado na requisição, usando o get
app.use(router.get("/hello", showHello));

// Faça o app "escutar", ou seja chame a função listen(),
// informando o endereço da porta e o identificador da função showPort
app.listen(port, showPort);
