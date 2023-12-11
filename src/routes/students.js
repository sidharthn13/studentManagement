const express = require("express");
const studentsRouter = express.Router();
const validateStudentsData = require("../middleware/students");
const authenticationMiddleware =require("../middleware/authenticationMiddleware");
const authorizationMiddleware = require("../middleware/authorizationMiddleware");
const studentsController = require("../controllers/students");
studentsRouter.post("/students",validateStudentsData.validateInputFields,authenticationMiddleware,
authorizationMiddleware.createByStaff,studentsController.createStudent)
module.exports = studentsRouter;