exports.up = function (knex) {
  return knex.schema.createTable("category", (categoryTable) => {
    categoryTable.increments("c_id").primary();
    categoryTable.string("c_name").notNullable();
    categoryTable.string("u_name").references("user.u_name");
    categoryTable.timestamp("created_at").defaultTo(knex.fn.now());
    categoryTable.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("category");
};
