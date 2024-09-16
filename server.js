// Vá no pacote express e guarde todos os poderes de servidor do node na constante express
const express = require("express");

// Chame a função express() para criar uma aplicação e guarde na constante app
const app = express();

// Defina o número da porta
const port = 3333;

// Defina a função showPort()
function showPort() {
  console.log("Servidor criado e rodando na porta ", port);
}

// Faça o app "escutar", ou seja chame a função listen(),
// informando o endereço da porta e o identificador da função showPort
app.listen(port, showPort);
