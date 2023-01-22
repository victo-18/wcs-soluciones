const { config } = require('dotenv');
config();

module.exports = {
  PORT: process.env.PORT,
  CLIENT_URL: process.env.CLIENT_URL,
  DEV_URL: process.env.DEV_URL,
  SECRET: process.env.SECRET,
}
