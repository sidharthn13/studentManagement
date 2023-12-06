const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");
const rolesSample = sequelize.define("rolesSample", {
  roleID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  role: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});
module.exports = rolesSample;
