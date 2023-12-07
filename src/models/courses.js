const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");
const courses = sequelize.define("courses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  courseName: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
});
module.exports = courses;
