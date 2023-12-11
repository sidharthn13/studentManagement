const express = require("express");
const studentsRouter = express.Router();
const validateStudentsData = require("../middleware/students");
const authenticationMiddleware = require("../middleware/authenticationMiddleware");
const authorizationMiddleware = require("../middleware/authorizationMiddleware");
const studentsController = require("../controllers/students");
studentsRouter.post(
  "/students",
  validateStudentsData.validateInputFields,
  authenticationMiddleware,
  authorizationMiddleware.createByStaff,
  studentsController.createStudent
);
studentsRouter.get(
  "/students",
  authenticationMiddleware,
  authorizationMiddleware.accessByAdminAndStaff,
  studentsController.getStudents
);
studentsRouter.get(
  "/students/:id",
  validateStudentsData.sanitizeRequestParam,
  authenticationMiddleware,
  authorizationMiddleware.accessByAdminAndStaff,
  studentsController.getStudentByID
);
studentsRouter.delete(
  "/students/:id",
  validateStudentsData.sanitizeRequestParam,
  authenticationMiddleware,
  authorizationMiddleware.accessByAdminAndStaff,
  studentsController.deleteStudent
);
module.exports = studentsRouter;
