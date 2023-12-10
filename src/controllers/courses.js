const coursesService = require("../service/courses")
const coursesController = {
    createCourse:coursesService.create
};
module.exports = coursesController