const mongoose = require("mongoose"); // Import do mongoose

// Função para conectar o BD
async function connectDatabase() {
  try {
    console.log("Conexão com o banco de dados iniciou...");

    await mongoose.connect(
      "mongodb+srv://isabellegjesuino:SCg2kra1gocYm1PT@clusterwomen.w372o.mongodb.net/?retryWrites=true&w=majority&appName=ClusterWomen"
    );

    console.log("Conexão com o banco de dados feita com sucesso!");
  } catch (erro) {
    console.log(erro);
  }
}

module.exports = connectDatabase;
