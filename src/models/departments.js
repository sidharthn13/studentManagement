const {DataTypes}= require("sequelize")
const sequelize = require("../config/database.js")
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
        allowNull:false
    }
});
module.exports = departments;