const express = require("express");
app = express();
const { routeNotFound, handle404Error } = require("./error");

const apiRouter = require("./routes/api");
app.use(express.json());
app.use("/api", apiRouter);
app.all("/*", routeNotFound);

app.use(handle404Error);
module.exports = app;
