const Students = require("../models/students")
const Scores = require("../models/scores")
const sequelize = require("../config/database")
const scoresRepository = {
    findStudentData : async function(studentID){
        const studentData = await Students.findByPk(studentID)
        return studentData 
    },
    getCourseIfBelongsToDepartment: async function(departmentId,courseId){
        const result =await sequelize.models.DepartmentsCourses.findOne({
            where:{
                departmentId:departmentId,
                courseId:courseId
            }
        })
            return result;
    },
    addScore: async function(data){
        const result = await Scores.findOrCreate({
            where: { studentID: data.studentID, courseID: data.courseID },
            defaults: data,
          });
        return result;
    }
};
module.exports = scoresRepository