exports.up = function (knex) {
  return knex.schema.createTable("list",  (listTable) => {
    listTable.increments("l_id").primary();
    listTable.string("l_name").notNullable();
    listTable.string("l_item").notNullable();
    listTable.integer("l_quantity").defaultTo(1);
    listTable.boolean("l_done").defaultTo(false);
    listTable.timestamp("created_at").defaultTo(knex.fn.now());
    listTable.timestamp("updated_at").defaultTo(knex.fn.now());
    listTable.string("u_name").references("user.u_name");
    listTable.integer("c_id").unsigned().references("category.c_id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("list");
};
