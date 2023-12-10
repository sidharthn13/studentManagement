const departments = require("../models/departments");
const Courses = require("../models/courses")
const coursesRepository = {
    findDepartment:async function(id){
        result = await departments.findByPk(id)
        return result
    },
    createCourse: async function(data){
        result = await Courses.findOrCreate({where:{courseName:data.courseName},
            defaults:{courseName:data.courseName}})
        return result;
    },
    mapCourseToDepartment: async function(courseInstance,departmentsInstance){
        const result = await departmentsInstance.addCourses(courseInstance,{through:"DepartmentsCourses"})
        console.log(result)
    }
};
module.exports = coursesRepository