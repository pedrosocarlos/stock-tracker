/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/infra/db/dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./src/infra/db/migrations",
      extension: "ts",
    },
    seeds: {
      directory: "./src/infra/db/seeds",
      extension: "ts",
    },
  },
  production: {
    client: "mariadb",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./dist/infra/db/migrations",
      extension: "js",
    },
    seeds: {
      directory: "./dist/infra/db/seeds",
      extension: "js",
    },
  },
};
