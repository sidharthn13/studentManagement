const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({
  path: "/home/sidharth/Git-Commits/Student-Management/studentManagement/.env",
});
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER_NAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);
module.exports = sequelize;
