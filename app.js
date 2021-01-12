const express = require("express");
app = express();

const apiRouter = require("./routes/api");
app.use(express.json());
app.use("/api", apiRouter);
module.exports = app;
