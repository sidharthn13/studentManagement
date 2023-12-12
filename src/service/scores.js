const scoresRepository = require("../repository/scores")
const departmentsRepository = require("../repository/departments")
const coursesRepository = require("../repository/courses")
const scoresService = {
    addScore:async(req,res)=>{
        try{
            const data = req.body;
            const studentData = await scoresRepository.findStudentData(data.studentID)
            const departmentID = studentData.department
            const courseInDepartment = await scoresRepository.getCourseIfBelongsToDepartment(
                departmentID,data.courseID);
            console.log(courseInDepartment)
            if(!courseInDepartment){return res.status(400).json({Error:"Student is not enrolled in this course"})}
            const scoreAdded = await scoresRepository.addScore(data)   
            return res.status(200).json({Success: "Score added to database"}) 
        }
        catch(error){
            return res.status(500).json({Error:error});
        }
    }
};
module.exports = scoresService;