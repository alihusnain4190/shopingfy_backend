exports.up = function (knex) {
  return knex.schema.createTable("items", (itemTable) => {
    itemTable.increments("i_id").primary();
    itemTable.string("i_name").notNullable();
    itemTable.string("i_image");
    itemTable.string("i_note");
    itemTable.timestamp("created_at").defaultTo(knex.fn.now());
    itemTable.timestamp("updated_at").defaultTo(knex.fn.now());
    itemTable.integer("u_id").unsigned().references("user.u_id");
    itemTable.integer("c_id").unsigned().references("category.c_id");
  });
};

exports.down = function (knex) {

  return knex.schema.dropTable("items");
};
