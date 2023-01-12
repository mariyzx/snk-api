require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: process.env.PGHOST,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  define: {
    timestamps: true,
    underscored: true,
  },
}