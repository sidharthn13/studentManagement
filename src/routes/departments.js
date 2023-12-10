const express = require("express");
const departmentsRouter = express.Router();
const authenticationMiddleware = require("../middleware/authenticationMiddleware");
const authorizationMiddleware = require("../middleware/authorizationMiddleware");
const validateDepartmentsData = require("../middleware/departments");
const departmentsController = require("../controllers/departments");
departmentsRouter.post(
  "/departments",
  validateDepartmentsData,
  authenticationMiddleware,
  authorizationMiddleware.createByAdmin,
  departmentsController.createDepartment
);
departmentsRouter.get("/departments",authenticationMiddleware,  authorizationMiddleware.accessByAdmin,
 departmentsController.getDepartments)
module.exports = departmentsRouter;
