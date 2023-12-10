const coursesRepository = require("../repository/courses")
const coursesService ={
    create: async(req,res)=>{
        const data = req.body
        const department = await coursesRepository.findDepartment(data.departmentID)
        if(!department){
            return res.status(400).json({Error:" No department with that ID exits"})
        
        }
    }
}
module.exports = coursesService;