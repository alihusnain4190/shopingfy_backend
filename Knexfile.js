const ENV = process.env.Node_ENV || "development";
const { DB_URL } = process.env;
const baseConfig = {
  client: "pg",
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
};
const customConfig = {
  development: {
    connection: {
      database: "shoppingfy",
      user: "ali",
      password: "secretword123",
    },
  },
  test: {
    connection: {
      database: "shoppingfy_test",
      user: "ali",
      password: "secretword123",
    },
  },
  production: {
    connection: {
      connectionString: DB_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
const log = console.log;
console.log = (...args) => {
  if (!/FsMigrations/.test(args[0])) log(...args);
};

module.exports = { ...customConfig[ENV], ...baseConfig };
