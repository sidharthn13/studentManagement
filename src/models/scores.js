const {DataTypes} = require("sequelize")
const sequelize = require("../config/database.js")
const scores = sequelize.define("scores", {
    studentID:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    courseID:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    score:{
        type:DataTypes.STRING(20),
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
})
module.exports = scores;