const studentsService = require("../service/students");
const studentsController ={
    createStudent:studentsService.create,
    getStudents:studentsService.getAll,
}
module.exports = studentsController;