const express= require("express");
const coursesRouter = express.Router();
const authenticationMiddleware= require("../middleware/authenticationMiddleware");
const authorizationMiddleware= require("../middleware/authorizationMiddleware");
const validateInputData = require("../middleware/courses")
const coursesController = require("../controllers/courses")
coursesRouter.post("/courses",validateInputData,authenticationMiddleware,
authorizationMiddleware.accessByAdmin,coursesController.createCourse);
module.exports = coursesRouter;