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
        type:DataTypes.STRING(20),
        allowNull:false
    },
    updatedBy:{
        type:DataTypes.STRING(20),
        allowNull:true
    }
});
departments.belongsToMany(courses,{through:"DepartmentsCourses"})
courses.belongsToMany(departments,{through:"DepartmentsCourses"})
module.exports = departments;