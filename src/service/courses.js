const coursesRepository = require("../repository/courses")
const coursesService ={
    create: async(req,res)=>{
        try{ 
        const data = req.body
        const department = await coursesRepository.findDepartment(data.departmentID)
        if(!department){
            return res.status(400).json({Error:" No department with that ID exits"})
        }
        const searchResult = await coursesRepository.createCourse(data)
        if(!searchResult[1]){return res.status(400).json({Error:"course already exists"})}
        const newData = {departmentId:data.departmentID,
                        courseId:searchResult[0].id}
        await coursesRepository.mapCourseToDepartment(searchResult[0],department)
        return res.status(200).json({Success:"Course added"})}
        catch(error){return res.status(500).json({Error:error})}
        
        
    }
}
module.exports = coursesService;