const { getAllUser } = require("../models/user");
exports.fetchAllUser = async (req, res) => {
  const user = await getAllUser();

  res.status(200).send({ user });
};
