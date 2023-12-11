const scoresRepository = require("../repository/scores")
const departmentsRepository = require("../repository/departments")
const coursesRepository = require("../repository/courses")
const scoresService = {
    addScore:async(req,res)=>{
        try{
            const data = req.body;
            // const courseID = data.courseID
            // const studentID = data.studentID
            // const score = data.score
            const studentData = await scoresRepository.findStudentData(data.studentID)
            const departmentID = studentData.department
            const departmentInstance = await departmentsRepository.getByID(departmentID)
            const courseInstance = await coursesRepository.getByID(data.courseID)
            const getCourseFromDepartment = scoresRepository.

        }
        catch(error){
            return res.status(500).json({Error:error});
        }
    }
};
module.exports = scoresService;