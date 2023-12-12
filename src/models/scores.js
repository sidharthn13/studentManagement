const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");
const students = require("./students.js");
const courses = require("./courses.js");
const scores = sequelize.define("scores", {
  studentID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  courseID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  updatedBy: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
});
students.belongsToMany(courses, {
  through: scores,
  foreignKey: "studentID",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
courses.belongsToMany(students, {
  through: scores,
  foreignKey: "courseID",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
module.exports = scores;
