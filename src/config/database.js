const { Sequelize } = require('sequelize')
const dotenv = require("dotenv");
dotenv.config({path: "/home/sidharth/Git-Commits/studentManagement/.env"});
const sequelize = new Sequelize("studentManagement", "postgres","sidharth1311", {
    host: "localhost",
    dialect:'postgres'})
module.exports = sequelize


