const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  database: process.env.PG_DB,
});

pool
  .connect()
  .then(() => {
    console.log("connected pg");
  })
  .catch((e) => {
    console.log("not connected pg");
  });

module.exports = pool;
