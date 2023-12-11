const Departments = require("../models/departments");
const Courses = require("../models/courses")
const Students = require("../models/students")
const Scores = require("../models/scores")
const scoresRepository = {
    findStudentData : async function(studentID){
        const studentData = await Students.findByPk(studentID)
        return studentData 
    },
    getCourseIfBelongsToDepartment: async function(departmentInstance,courseInstance){
        const result = 
    },
};
module.exports = scoresRepository