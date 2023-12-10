const express = require("express");
const departmentsRouter = express.Router();
const authenticationMiddleware = require("../middleware/authenticationMiddleware");
const authorizationMiddleware = require("../middleware/authorizationMiddleware");
const validateDepartmentsData = require("../middleware/departments");
const departmentsController = require("../controllers/departments");
departmentsRouter.post(
  "/departments",
  validateDepartmentsData.validateInputFields,
  authenticationMiddleware,
  authorizationMiddleware.createByAdmin,
  departmentsController.createDepartment
);
departmentsRouter.get(
  "/departments",
  authenticationMiddleware,
  authorizationMiddleware.accessByAdmin,
  departmentsController.getDepartments
);
departmentsRouter.get(
  "/departments/:id",
  validateDepartmentsData.sanitizeRequestParam,
  authenticationMiddleware,
  authorizationMiddleware.accessByAdmin,
  departmentsController.getDepartmentByID
);
departmentsRouter.delete(
  "/departments/:id",
  validateDepartmentsData.sanitizeRequestParam,
  authenticationMiddleware,
  authorizationMiddleware.accessByAdmin,
  departmentsController.deleteDepartment
);
departmentsRouter.put(
  "/departments/:id",
  validateDepartmentsData.validateInputFields,
  validateDepartmentsData.sanitizeRequestParam,
  authenticationMiddleware,
  authorizationMiddleware.updateByAdmin,
  departmentsController.updateDepartment
);
module.exports = departmentsRouter;
