exports.up = function (knex) {
  console.log("house table create");
  return knex.schema.createTable("user", (userTable) => {
    userTable.increments("u_id").primary();
    userTable.string("u_name").notNullable();
    userTable.string("email").notNullable();
    userTable.string("password").notNullable();
    userTable.timestamp("created_at").defaultTo(knex.fn.now());
    userTable.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
