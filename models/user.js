const db = require("../db/connection");
const axios = require("axios");
exports.getAllUser = async () => {
  const users = await db.select("*").from("user");
  return users;
};
exports.addUser = async (user) => {
  if (user.u_email === "") {
    return Promise.reject({ status: 404, msg: "email could not be empty" });
  }
  if (user.u_password === "") {
    return Promise.reject({ status: 404, msg: "password could not be empty" });
  }
  const userData = await db("user").insert(user).returning("*");
  return userData[0];
};
