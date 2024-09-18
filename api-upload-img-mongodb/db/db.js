const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

async function main() {
  await mongoose.connect(
    'mongodb+srv://$(process.env.DBUSER):${process.env.DBPASS)@clus'
  );
  console.log("Conectado com sucesso!");
}

main().catch((erro) => console.log(erro));
module.exports = main;