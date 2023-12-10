const {DataTypes} = require("sequelize")
const sequelize = require("../config/database.js")
const departments = require("./departments.js")
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
        allowNull:false,
        // references:{
        //     model:departments,
        //     key:"id",
        //     onDelete:"CASCADE"
        // }
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
students.belongsTo(departments, {as:"StudentDept", foreignKey: "department", onDelete: 'CASCADE' });
departments.hasMany(students,{foreignKey:"department", onDelete: 'CASCADE'});

module.exports = students;