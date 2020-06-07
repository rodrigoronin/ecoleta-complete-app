import knex from "knex";
import path from "path";

// Objeto com as informações sobre o banco de dados
const connection = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"), // __dirname retorna o caminho do diretório do arquivo que o está executando
  },
  useNullAsDefault: true,
});

export default connection;
