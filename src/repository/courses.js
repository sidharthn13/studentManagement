const departments = require("../models/departments");
const courses = require("../models/courses")
const coursesRepository = {
    findDepartment:async function(id){
        result = await departments.findByPk(id)
        return result
    },
    createCourse: async function(data){
        result = await courses.findOrCreate({where:{courseName:data.courseName},
            defaults:{courseName:data.courseName}})
        return result;
    },
    mapCourseToDepartment: async function(data){
        
    }
};
module.exports = coursesRepository