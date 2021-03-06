exports.up = function (knex) {
  return knex.schema.createTable("items", (itemTable) => {
    itemTable.increments("i_id").primary();
    itemTable.string("i_name").notNullable();
    itemTable.string("i_image");
    itemTable.string("i_note");
    itemTable.integer("c_id").references("category.c_id");
    itemTable.string("u_name").references("user.u_name");
    itemTable.timestamp("created_at").defaultTo(knex.fn.now());
    itemTable.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("items");
};
