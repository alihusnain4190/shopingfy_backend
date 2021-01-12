const userRouter = require("express").Router();
const { fetchAllUser, postUser } = require("../controller/users");
const { withErrorHandling, methodNotAllowed } = require("../error");

userRouter
  .route("/")
  .get(withErrorHandling(fetchAllUser))
  .post(withErrorHandling(postUser));

module.exports = userRouter;
