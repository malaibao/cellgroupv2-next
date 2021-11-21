const { Pool } = require('pg');

// pools will use environment variables
// for connection information
const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_DABATASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,

  //   connectionString:
});

modules.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
