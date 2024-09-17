const mongoose = require("mongoose"); // Import do mongoose
require("dotenv").config(); // Import do dotenv

// Função para conectar o BD
async function connectDatabase() {
  try {
    console.log("Conexão com o banco de dados iniciou...");

    await mongoose.connect(process.env.MONGO_URL);

    console.log("Conexão com o banco de dados feita com sucesso!");
  } catch (erro) {
    console.log(erro);
  }
}

module.exports = connectDatabase;
