const {DataTypes} = require("sequelize")
const sequelize = require("../config/database.js")
const users = sequelize.define("users", {
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email:{
        type:DataTypes.STRING(50),
        unique:true,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING(20),
        allowNull:false
    },
    name:{
        type:DataTypes.STRING(20),
        allowNull:false
    },
    role:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    createdBy:{
        type:DataTypes.STRING(20),
        allowNull:true
    }
})
module.exports = users