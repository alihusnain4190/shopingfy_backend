exports.up = function (knex) {
  return knex.schema.createTable("user", (userTable) => {
    userTable.string("u_name").unique();
    userTable.string("u_email").notNullable();
    userTable.string("u_password").notNullable();

    userTable.timestamp("created_at").defaultTo(knex.fn.now());
    userTable.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
