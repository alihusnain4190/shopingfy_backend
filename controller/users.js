const { getAllUser, addUser } = require("../models/user");

exports.fetchAllUser = async (req, res) => {
  const user = await getAllUser();

  res.status(200).send({ user });
};

exports.postUser = async (req, res) => {
  const data = req.body;
  const user = await addUser(data);
  res.status(201).send({ user });
};
