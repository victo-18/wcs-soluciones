const { Pool } = require("pg");
const pool = new Pool({
  connectionString:
    "postgres://hkeuyuahrrbnpa:8ac52aaaff60ecbea4f86db18e724381c3aa8df2e28786461d113f0f7dd2be40@ec2-44-206-137-96.compute-1.amazonaws.com:5432/d1qlfgcsb7hoj2",
  ssl: {
    rejectUnauthorized: false,
  },
  // user: 'hkeuyuahrrbnpa',
  // host: 'ec2-44-206-137-96.compute-1.amazonaws.com',
  // database: 'd1qlfgcsb7hoj2',
  // password: '8ac52aaaff60ecbea4f86db18e724381c3aa8df2e28786461d113f0f7dd2be40',
  // port: 5432
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
