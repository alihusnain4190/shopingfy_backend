const { user, items, category, list } = require("../data/index");
exports.seed = async (knex) => {
  await knex.migrate.rollback();
  await knex.migrate.latest();

  const userData =await knex("user").insert(user, "*");
 
  const categoryData =await knex("category").insert(category, "*");
  const itemsData =await knex("items").insert(items, "*");
  
  const listData =await knex("list").insert(list, "*");

  console.log(listData)
  // await Promise.all([userData, categoryData, itemsData])
  //   .then((resp) => {
  //     console.log(resp);
  //   })
  //   .catch((err) => {
  //     console.log(err);
//    });
};
