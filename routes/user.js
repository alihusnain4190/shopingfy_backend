const userRouter = require("express").Router();
const {fetchAllUser} = require("../controller/users");
userRouter.get("/", fetchAllUser);

module.exports = userRouter;
