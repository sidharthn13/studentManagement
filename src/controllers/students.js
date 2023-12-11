const studentsService = require("../service/students");
const studentsController = {
  createStudent: studentsService.create,
  getStudents: studentsService.getAll,
  getStudentByID: studentsService.getByID,
  deleteStudent: studentsService.deleteByID,
};
module.exports = studentsController;
