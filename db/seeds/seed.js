const { user, items, category, list } = require("../data/index");

exports.seed = async (knex) => {
  await knex.migrate.rollback();
  await knex.migrate.latest();

  const userData = knex("user").insert(user, "*");
  await Promise.all([userData])
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};
