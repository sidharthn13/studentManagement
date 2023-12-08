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
        type:DataTypes.STRING(20),
        allowNull:false
    },
    updatedBy:{
        type:DataTypes.STRING(20),
        allowNull:false
    }
});
students.belongsTo(departments, {as:"StudentDept", foreignKey: "department", onDelete: 'CASCADE' });
departments.hasMany(students,{foreignKey:"department"});

module.exports = students;