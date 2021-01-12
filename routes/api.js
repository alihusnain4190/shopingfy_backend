const apiRouter = require("express").Router();

const userRouter = require("./user");
apiRouter
  .route("/")
  .get((req, res) => res.send({ ok: true }))
  // .all(methodNotAllowed);
apiRouter.use("/user", userRouter);
module.exports = apiRouter;
