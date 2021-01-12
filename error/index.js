exports.withErrorHandling = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res);
    } catch (err) {
      next(err);
    }
  };
};
exports.routeNotFound = (req, res) => {
  res.status(404).send({ msg: "Route Not Found" });
};
exports.handle404Error = (err, req, res, next) => {
  if (err) {
    if (err.status) res.status(err.status).send({ msg: err.msg });
    else next(err);
  }
};
