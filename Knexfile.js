const ENV = process.env.Node_ENV || "development";
const baseConfig = {
  client: "pg",
  migrations: {
    directory: "./db/migrations",
  },
  seed: {
    directory: "./db/seeds",
  },
};
const customConfig = {
  development: {
    connection: { database: "shoppingfy", user: "ali", password: "secretword123" },
  },
  test: {
    connection: {
      database: "shoppingfy_test",
      user: "ali",
      password: "secretword123",
    },
  },
};

module.exports = { ...baseConfig, ...customConfig[ENV] };
