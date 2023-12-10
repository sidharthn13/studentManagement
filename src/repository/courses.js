const departments = require("../models/departments");
const courses = require("../models/courses")
const coursesRepository = {
    findDepartment:async function(id){
        result = await departments.findByPk(id)
        return result
    }
};
module.exports = coursesRepository