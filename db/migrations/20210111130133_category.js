exports.up = function (knex) {
  return knex.schema.createTable("category", (categoryTable) => {
    categoryTable.increments("c_id").primary();
    categoryTable.string("c_name").notNullable();
    categoryTable.integer("u_id").references("user.u_id");
    categoryTable.timestamp("created_at").defaultTo(knex.fn.now());
    categoryTable.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("category");
};
