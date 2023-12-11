const studentsService = require("../service/students");
const studentsController ={
    createStudent:studentsService.create,
    getStudents:studentsService.getAll,
    getStudentByID:studentsService.getByID,
}
module.exports = studentsController;