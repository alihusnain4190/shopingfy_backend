const db = require("../db/connection");
const axios = require("axios");
exports.getAllUser = async () => {
  const users = await db.select("*").from("user");
  return users;
};
