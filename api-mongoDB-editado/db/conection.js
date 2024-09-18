const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.q5fjq.mongodb.net?retryWrites=true&w=majority`
    );
    console.log("Conectado com sucesso!")

  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;