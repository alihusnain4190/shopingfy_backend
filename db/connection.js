const ENV = process.env.NODE_ENV || "development";

const connection = require("knex");
console.log(connection);
const dbConfig =
  ENV === "production"
    ? { client: "pg", connection: process.env.DATABASE_URL }
    : require("../Knexfile");
console.log(dbConfig);
module.exports = connection(dbConfig);
