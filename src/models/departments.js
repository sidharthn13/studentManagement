const {DataTypes}= require("sequelize")
const sequelize = require("../config/database.js")
const courses = require("./courses.js")
const departments = sequelize.define("departments",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    departmentName:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    createdBy:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    updatedBy:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
});
departments.belongsToMany(courses,{through:"DepartmentsCourses"})
courses.belongsToMany(departments,{through:"DepartmentsCourses"})
module.exports = departments;