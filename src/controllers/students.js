const studentsService = require("../service/students");
const studentsController ={
    createStudent:studentsService.create
}
module.exports = studentsController;