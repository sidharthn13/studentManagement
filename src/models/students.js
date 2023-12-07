const {DataTypes} = require("sequelize")
const sequelize = require("../config/database.js")
const students = sequelize.define("students",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING(20),
        allowNull:false
    },
    department:{
        type:DataTypes.INTEGER,
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
module.exports = students;