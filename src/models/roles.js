const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");
const roles = sequelize.define("roles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  role: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});
module.exports = roles;
